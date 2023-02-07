import React from "react";

//INTERNAL IMPORT
import Style from "../styles/collection.module.css";
import images from "../img";
import { Banner, CollectionProfile, NFTCardTwo } from "../collectionPage/collectionIndex";
import { Slider, Brand } from "../components/ComponentIndex";
import Filter from "../components/Filter/Filter";

const collection = () => {
  const collectionArray = [
    {
      image: images.nft_image_1,
      name: "NFT_IMAGE1",
      price: "00.1",
      seller: "seller",
      tokenId: "1",
      description: "",
      tokenURI: "",
      owner: "",
    },
    {
      image: images.nft_image_2,
      name: "NFT_IMAGE2",
      price: "1.4",
      seller: "seller",
      tokenId: "2",
      description: "",
      tokenURI: "",
      owner: "",
    },
    {
      image: images.creatorbackground6,
      name: "NFT_IMAGE3",
      price: "0.42",
      seller: "seller",
      tokenId: "2",
      description: "",
      tokenURI: "",
      owner: "",
    },
    {
      image: images.ai4,
      name: "NFT_IMAGE4",
      price: "0.28",
      seller: "seller",
      tokenId: "3",
      description: "",
      tokenURI: "",
      owner: "",
    },
    {
      image: images.animal,
      name: "NFT_IMAGE5",
      price: "4",
      seller: "seller",
      tokenId: "4",
      description: "",
      tokenURI: "",
      owner: "",
    },
    {
      image: images.bored2,
      name: "NFT_IMAGE6",
      price: "7",
      seller: "seller",
      tokenId: "5",
      description: "",
      tokenURI: "",
      owner: "",
    },
    {
      image: images.ai4,
      name: "NFT_IMAGE7",
      price: "2",
      seller: "seller",
      tokenId: "6",
      description: "",
      tokenURI: "",
      owner: "",
    },
    {
      image: images.founder4,
      name: "NFT_IMAGE8",
      price: "2.5",
      seller: "seller",
      tokenId: "7",
      description: "",
      tokenURI: "",
      owner: "",
    },
  ];
  return (
    <div className={Style.collection}>
      <Banner bannerImage={images.creatorbackground1} />
      <CollectionProfile />
      <Filter />
      <NFTCardTwo NFTData={collectionArray} />
      <Slider />
      <Brand />
    </div>
  );
};

export default collection;
