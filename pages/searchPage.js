import React, { useState, useEffect, useContext } from "react";

//INTRNAL IMPORT
import Style from "../styles/searchPage.module.css";
import { Slider, Brand } from "../components/ComponentIndex";
import { SearchBar } from "../SearchPage/searchBarIndex";
import { Filter, Loader } from "../components/ComponentIndex";
import { NFTCardTwo, Banner } from "../collectionPage/collectionIndex";
import images from "../img";

//SMART CONTRACT IMPORT
import { NFTMarketplaceContext, setError } from "../context/NFTMarketplaceContext";

const searchPage = () => {
  const { fetchNFTS } = useContext(NFTMarketplaceContext);
  const [nfts, setNFTs] = useState([]);
  const [nftsCopys, setNftCopys] = useState([]);

  useEffect(() => {
    try {
      fetchNFTS().then((item) => {
        setNFTs(item.reverse());
        setNftCopys(item);
      });
    } catch (error) {
      setError("Please reload the browser");
    }
  }, []);

  //Seacrh NFT Function
  const onHandleSearch = (value) => {
    const filteredNFTS = nfts.filter(({ name }) => name.toLowerCase().includes(value.toLowerCase()));

    if (filteredNFTS.length == 0) {
      setNFTs(nftsCopys);
    } else {
      setNFTs(filteredNFTS);
    }
  };

  //Clear search NFT function
  const onClearSearch = () => {
    if (nfts.length && nftsCopys.length) {
      setNFTs(nftsCopys);
    }
  };

  // const collectionArray = [
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  //   images.nft_image_2,
  // ];
  return (
    <div className={Style.searchPage}>
      <Banner bannerImage={images.creatorbackground2} />
      <SearchBar onHandleSearch={onHandleSearch} onClearSearch={onClearSearch} />
      <Filter />
      {nfts.length == 0 ? <Loader /> : <NFTCardTwo NFTData={nfts} />}
      <Slider />
      <Brand />
    </div>
  );
};

export default searchPage;
