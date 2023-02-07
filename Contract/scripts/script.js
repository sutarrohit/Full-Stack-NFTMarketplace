const { ethers, network, getNamedAccounts } = require("hardhat");

async function main() {
  const { player } = await getNamedAccounts();
  const nftMarketPlace = await ethers.getContract("NftMarketPlace");

  //CREATE NFT----------------------------------------------------
  const price = ethers.utils.parseEther("0.0015");
  const tokenURI = "TokenURI2";
  const nft = await nftMarketPlace.createToken(tokenURI, price, { value: price });
  await nft.wait();
  console.log(nft);

  // Fecth nftMarketPlace -----------------------------------------
  const MarketData = await nftMarketPlace.fetchMarketItem();
  console.log(MarketData.toString());

  //fetchItemsListed------------------------------------------------
  const fetchItemsListed = await nftMarketPlace.fetchItemListed();
  console.log("fetchItemsListed", fetchItemsListed.toString());

  //MyNFT----------------------------------------------------
  const fetchMyNFT = await nftMarketPlace.fecthMyNFT();
  console.log("fetchMyNFT", fetchMyNFT.toString());

  //Buy NFT----------------------------------------------------
  const buy = await nftMarketPlace.createMarketSale("1", { value: price });
  console.log("fetchMyNFT", buy);

  //reSell----------------------------------------------------
  const reSell = await nftMarketPlace.resellToken("1", price, { value: price });
  console.log(reSell);

  //getListedPrice----------------------------------------------------
  const getPrice = await nftMarketPlace.getListingPrice();
  console.log(getPrice.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
