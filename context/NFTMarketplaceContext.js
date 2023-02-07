import React, { useState, useContext, useEffect } from "react";
import Web3Modal from "web3modal";
import { Contract, ContractFactory, ethers } from "ethers";
import Router from "next/router";
import { useRouter } from "next/router";
import axios from "axios";
import { create as ipfsHttpClient } from "ipfs-http-client";

const GOERLI_RPC_URL = process.env.NEXT_PUBLIC_GOERLI_RPC_URL;
const PROJECTID = process.env.NEXT_PUBLIC_PROJECTID;
const PROJECTSECRETEKEY = process.env.NEXT_PUBLIC_PROJECTSECRETEKEY;
const SUBDOMAIN = process.env.NEXT_PUBLIC_SUBDOMAIN;

//To Upload Image to IPFS
const projectId = PROJECTID;
const projectSecreteKey = PROJECTSECRETEKEY;
const auth = "Basic " + Buffer.from(projectId + ":" + projectSecreteKey).toString("base64");
const subdomain = SUBDOMAIN;
const temp = 10;

const client = ipfsHttpClient({
  host: "ipfs.infura.io",
  //host: "infura-ipfs.io/ipfs",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});

//INTERNAL IMPORT
import { NftMarketplaceAddress, NftMarketplaceABI } from "./constant";

// ----FETCHING OR GETTING SMART CONTRACT USING ETHERS.JS
const fetchContract = (signerorProvider) =>
  new ethers.Contract(NftMarketplaceAddress, NftMarketplaceABI, signerorProvider);

//----CONNECTING WITH SMART CONTRACT
const connectingWithSmartContract = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);
    return contract;
  } catch (error) {
    console.log("Something went wrong while connecting with contract");
  }
};

// Creating context to managing data
export const NFTMarketplaceContext = React.createContext();

//-----------------------------Sending data to all components---------------------------//
export const NFTMarketplaceProvider = ({ children }) => {
  //USE STATE
  const [error, setError] = useState("");
  const [openError, setOpenError] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");
  const [blockchain, setBlockchain] = useState(0);
  const router = useRouter();

  // -----Check If Wallet Is Connected
  const checkWalletIsConnected = async () => {
    try {
      if (!window.ethereum) return setOpenError(true), setError("Install MetaMask");
      //----CHECK IF THERE IS ANY ACCOUNT
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        setBlockchain(window.ethereum.networkVersion);
      } else {
        setError("No Account Found");
        setOpenError(true);
      }
    } catch (error) {
      console.log(`error is ${error}`);
      setError(`Error While Connecting Wallet`);
      setOpenError(true);
    }
  };

  // -----CONNECT WALLET FUNCTION
  const connectWallet = async () => {
    try {
      if (!window.ethereum) return setOpenError(true), setError("Install MetaMask");
      //----REQUEST WALLET
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
      setBlockchain(window.ethereum.networkVersion);
    } catch (error) {
      console.log(error);
      setError(`Error While Connecting Wallet`);
      setOpenError(true);
    }
  };

  // ----UPLOAD IMAGES TO IPFS
  const uploadToIPFS = async (file) => {
    try {
      const added = await client.add({ content: file });
      const url = `${subdomain}/ipfs/${added.path}`;
      console.log(`IPFS Image URL ${url}`);
      return url;
    } catch (error) {
      console.log("Error Uploading to IPFS", error);
      setError(`Error Uploading to IPFS`);
      setOpenError(true);
    }
  };

  // ----CREATE NFT & UPLOAD METADATA TO IPFS
  const createNFT = async (name, price, image, description, router) => {
    if (!name || !description || !price || !image) return setOpenError(true), setError(`Missing Data`);

    //Convert data into JSON format
    const data = JSON.stringify({ name, description, image });

    // ---Add data to IPFS
    try {
      const added = await client.add(data);
      const url = `https://infura-ipfs.io/ipfs/${added.path}`;
      await createSale(url, price);
    } catch (error) {
      console.log(`Error to upload IPFS${error}`);
      setError(`Error to upload IPFS`);
      setOpenError(true);
    }
  };

  // ------INTERNAL FUNCTION TO CREATE NFT SALE
  const createSale = async (url, formInputPrice, isReselling, id) => {
    try {
      const price = ethers.utils.parseUnits(formInputPrice, "ether");

      const contract = await connectingWithSmartContract();

      const listingPrice = await contract.getListingPrice();

      // --CREATE NFT
      const transaction = !isReselling
        ? await contract.createToken(url, price, {
            value: listingPrice.toString(),
          })
        : await contract.resellToken(id, price, {
            value: listingPrice.toString(),
          });

      await transaction.wait();
      router.push("/searchPage");
    } catch (error) {
      console.log(`Create sale error ${error}`);
      setError(`Create sale error`);
      setOpenError(true);
    }
  };

  // ----FETCH ALL NFTs LISTED ON MARKETPLACE
  const fetchNFTS = async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL);
      const contract = fetchContract(provider);

      const data = await contract.fetchMarketItem();

      // --Resolve the promise
      const items = await Promise.all(
        data.map(async ({ tokenId, seller, owner, price: unformattedPrice }) => {
          const tokenURI = await contract.tokenURI(tokenId);

          // Fetch IPFS data using axios API
          const {
            data: { image, name, description },
          } = await axios.get(tokenURI);

          const price = ethers.utils.formatUnits(unformattedPrice.toString(), "ether");

          return {
            price,
            tokenId: tokenId.toNumber(),
            seller,
            owner,
            image,
            name,
            description,
            tokenURI,
          };
        })
      );

      return items;
    } catch (error) {
      console.log(`Fectching NFT error${error}`);
      setError(`Fectching NFT error`);
      setOpenError(true);
    }
  };

  // ----FETCHING MY NFTs or MY LISTED NFTs
  const fetchMyNFTsOrListedNFTs = async (type) => {
    try {
      const contract = await connectingWithSmartContract();

      const data = type == "fetchItemsListed" ? await contract.fetchItemListed() : await contract.fecthMyNFT();

      const items = await Promise.all(
        data.map(async ({ tokenId, seller, owner, price: unformattedPrice }) => {
          const tokenURI = await contract.tokenURI(tokenId);
          const {
            data: { image, name, description },
          } = await axios.get(tokenURI);
          const price = ethers.utils.formatUnits(unformattedPrice.toString(), "ether");

          return {
            price,
            tokenId: tokenId.toNumber(),
            seller,
            owner,
            image,
            name,
            description,
            tokenURI,
          };
        })
      );
      return items;
    } catch (error) {
      console.log(`Error while fetchMyNFTorListedNFT ${error}`);
      setError(`Error while fetchMyNFTorListedNFT `);
      setOpenError(true);
    }
  };

  // ----BUY NFT FUNCTION
  const buyNFT = async (nft) => {
    const contract = await connectingWithSmartContract();

    const price = ethers.utils.parseUnits(nft.price.toString(), "ether");

    const transaction = await contract.createMarketSale(nft.tokenId, {
      value: price,
    });

    await transaction.wait();
    router.push("/author");

    try {
    } catch (error) {
      console.log(`Error buy NFT ${error}`);
      setError(`Error buy NFT`);
      setOpenError(true);
    }
  };

  // ----SetTheme
  const setTheme = (data) => {
    document.body.classList.toggle(data);
  };

  return (
    <NFTMarketplaceContext.Provider
      value={{
        checkWalletIsConnected,
        connectWallet,
        uploadToIPFS,
        createNFT,
        createSale,
        fetchNFTS,
        fetchMyNFTsOrListedNFTs,
        buyNFT,
        setTheme,
        setOpenError,
        setError,
        currentAccount,
        blockchain,
        error,
        openError,
      }}
    >
      {children}
    </NFTMarketplaceContext.Provider>
  );
};
