import React, { useState } from "react";

//INTERNAL IMPORT
import Style from "./AuthorNFTCardBox.module.css";
import images from "../../img";
import { NFTCardTwo } from "../../collectionPage/collectionIndex";
import FollowerTabCard from "../../components/FollowerTab/FollowerTabCard/FollowerTabCard";

const AuthorNFTCardBox = ({ collectiables, created, like, follower, following, nfts, myNfts }) => {
  // const collectiablesArray = [
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  //   images.nft_image_2,
  // ];

  // const createdArray = [images.nft_image_1, images.nft_image_2, images.nft_image_3, images.nft_image_1];

  // const likeArray = [
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  //   images.nft_image_2,
  // ];

  const followerArray = [
    {
      background: images.founder3,
      user: images.user1,
      name: "Jackson Baker",
      seller: "",
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
      name: "Giada Mann",
      seller: "",
    },
    {
      background: images.creatorbackground3,
      user: images.user10,
      name: "Easton Johnson",
      seller: "",
    },
    {
      background: images.founder4,
      user: images.user3,
      name: "Everly Williams",
      seller: "",
    },
    {
      background: images.cyber1,
      user: images.user4,
      name: "Sofia Brown",
      seller: "",
    },
    {
      background: images.creatorbackground6,
      user: images.user5,
      name: "Harrison Garcia",
      seller: "",
    },
    {
      background: images.ai4,
      user: images.user6,
      name: "Emma Jones",
      seller: "",
    },
    {
      background: images.ai1,
      user: images.user8,
      name: "Olivia Miller",
      seller: "",
    },
  ];

  const followingArray = [
    {
      background: images.creatorbackground3,
      user: images.user10,
      name: "Easton Johnson",
      seller: "",
    },
    {
      background: images.creatorbackground4,
      user: images.user3,
      name: "Everly Williams",
      seller: "",
    },

    {
      background: images.bored1,
      user: images.user6,
      name: "Emma Jones",
      seller: "",
    },
    {
      background: images.creatorbackground6,
      user: images.user8,
      name: "Olivia Miller",
      seller: "",
    },
  ];
  return (
    <div className={Style.AuthorNFTCardBox}>
      {collectiables && <NFTCardTwo NFTData={nfts} />}
      {created && <NFTCardTwo NFTData={myNfts} />}
      {like && <NFTCardTwo NFTData={myNfts} />}
      {follower && (
        <div className={Style.AuthorNFTCardBox_box}>
          {followerArray.map((el, i) => (
            <FollowerTabCard i={i} el={el} />
          ))}
        </div>
      )}
      {following && (
        <div className={Style.AuthorNFTCardBox_box}>
          {followingArray.map((el, i) => (
            <FollowerTabCard i={i} el={el} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AuthorNFTCardBox;
