import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdVerified, MdCloudUpload, MdTimer, MdReportProblem, MdOutlineDeleteSweep } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaWallet, FaPercentage } from "react-icons/fa";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { BiTransferAlt, BiDollar } from "react-icons/bi";

//INTERNAL IMPORT
import Style from "./NFTDescription.module.css";
import images from "../../img";
import { Button } from "../../components/ComponentIndex";
import { NFTTabs } from "../NFTDetailsIndex";

import { NFTMarketplaceContext } from "../../context/NFTMarketplaceContext";

const NFTDescription = ({ nft }) => {
  const [social, setSocial] = useState(false);
  const [NFTMenu, setNFTMenu] = useState(false);
  const [history, setHistory] = useState(true);
  const [provanance, setProvanance] = useState(false);
  const [owner, setOwner] = useState(false);

  const router = useRouter();

  const historyArray = [
    {
      user: images.user1,
      name: "Jackson Baker ",
    },
    {
      user: images.user10,
      name: "Easton Johnson",
    },
    {
      user: images.user3,
      name: "Everly Williams",
    },

    {
      user: images.user6,
      name: "Emma Jones",
    },
    {
      user: images.user8,
      name: "Olivia Miller",
    },
  ];

  const provananceArray = [
    {
      user: images.user2,
      name: "Giada Mann ",
    },
    {
      user: images.user4,
      name: "Sofia Brownn",
    },
    {
      user: images.user5,
      name: "Harrison Garcia",
    },

    {
      user: images.user6,
      name: "Emma Jones",
    },
    {
      user: images.user8,
      name: "Olivia Miller",
    },
    {
      user: images.user3,
      name: "Everly Williams ",
    },
  ];

  const ownerArray = [
    {
      user: images.user5,
      name: "Harrison Garcia",
    },
    {
      user: images.user4,
      name: "Sofia Brownn",
    },

    {
      user: images.user10,
      name: "Easton Johnson",
    },
    {
      user: images.user8,
      name: "Olivia Miller",
    },
  ];

  const openSocial = () => {
    if (!social) {
      setSocial(true);
      setNFTMenu(false);
    } else {
      setSocial(false);
    }
  };

  const openNFTMenu = () => {
    if (!NFTMenu) {
      setNFTMenu(true);
      setSocial(false);
    } else {
      setNFTMenu(false);
    }
  };

  const openTabs = (e) => {
    const btnText = e.target.innerText;

    if (btnText == "Bid History") {
      setHistory(true);
      setProvanance(false);
      setOwner(false);
    } else if (btnText == "Provanance") {
      setHistory(false);
      setProvanance(true);
      setOwner(false);
    }
  };

  const openOwner = () => {
    if (!owner) {
      setOwner(true);
      setHistory(false);
      setProvanance(false);
    } else {
      setOwner(false);
      setHistory(true);
    }
  };

  //SMART CONTRACAT IMPORT
  const { buyNFT, currentAccount } = useContext(NFTMarketplaceContext);

  return (
    <div className={Style.NFTDescription}>
      <div className={Style.NFTDescription_box}>
        {/* //Section ONE */}
        <div className={Style.NFTDescription_box_share}>
          <p>Virtual Worlds</p>
          <div className={Style.NFTDescription_box_share_box}>
            <MdCloudUpload className={Style.NFTDescription_box_share_box_icon} onClick={() => openSocial()} />

            {social && (
              <div className={Style.NFTDescription_box_share_box_social}>
                <a href="#">
                  <TiSocialFacebook /> Facebooke
                </a>
                <a href="#">
                  <TiSocialInstagram /> Instragram
                </a>
                <a href="#">
                  <TiSocialLinkedin /> LinkedIn
                </a>
                <a href="#">
                  <TiSocialTwitter /> Twitter
                </a>
                <a href="#">
                  <TiSocialYoutube /> YouTube
                </a>
              </div>
            )}

            <BsThreeDots className={Style.NFTDescription_box_share_box_icon} onClick={() => openNFTMenu()} />

            {NFTMenu && (
              <div className={Style.NFTDescription_box_share_box_social}>
                <a href="#">
                  <BiDollar /> Change price
                </a>
                <a href="#">
                  <BiTransferAlt /> Transfer
                </a>
                <a href="#">
                  <MdReportProblem /> Report abouse
                </a>
                <a href="#">
                  <MdOutlineDeleteSweep /> Delete item
                </a>
              </div>
            )}
          </div>
        </div>

        {/* //Section Two */}
        <div className={Style.NFTDescription_box_profile}>
          <h1>
            {nft.name} #{nft.tokenId}
          </h1>
          <div className={Style.NFTDescription_box_profile_box}>
            <div className={Style.NFTDescription_box_profile_box_left}>
              <Image
                src={images.user1}
                alt="profile"
                width={40}
                height={40}
                className={Style.NFTDescription_box_profile_box_left_img}
              />
              <div className={Style.NFTDescription_box_profile_box_left_info}>
                <small>Creator</small> <br />
                <Link href={{ pathname: "/author", query: `${nft.seller}` }}>
                  <span>
                    Jackson Baker <MdVerified />
                  </span>
                </Link>
              </div>
            </div>

            <div className={Style.NFTDescription_box_profile_box_right}>
              <Image
                src={images.creatorbackground1}
                alt="profile"
                width={40}
                height={40}
                className={Style.NFTDescription_box_profile_box_left_img}
              />

              <div className={Style.NFTDescription_box_profile_box_right_info}>
                <small>Collection</small> <br />
                <span>
                  Monkey Collection <MdVerified />
                </span>
              </div>
            </div>
          </div>

          <div className={Style.NFTDescription_box_profile_biding}>
            <p>
              <MdTimer /> <span>Auction ending in:</span>
            </p>

            <div className={Style.NFTDescription_box_profile_biding_box_timer}>
              <div className={Style.NFTDescription_box_profile_biding_box_timer_item}>
                <p>2</p>
                <span>Days</span>
              </div>
              <div className={Style.NFTDescription_box_profile_biding_box_timer_item}>
                <p>22</p>
                <span>hours</span>
              </div>
              <div className={Style.NFTDescription_box_profile_biding_box_timer_item}>
                <p>45</p>
                <span>mins</span>
              </div>
              <div className={Style.NFTDescription_box_profile_biding_box_timer_item}>
                <p>12</p>
                <span>secs</span>
              </div>
            </div>

            <div className={Style.NFTDescription_box_profile_biding_box_price}>
              <div className={Style.NFTDescription_box_profile_biding_box_price_bid}>
                <small>Current Bid</small>
                <p>
                  {nft.price} ETH <span>( ≈ ${nft.price * 1500} )</span>
                </p>
              </div>

              <span>[96 in stock]</span>
            </div>

            <div className={Style.NFTDescription_box_profile_biding_box_button}>
              {currentAccount == nft.seller.toLowerCase() ? (
                <Button icon=<FaWallet /> btnName="You Own This NFT" handleClick={() => {}} classStyle={Style.button} />
              ) : currentAccount == nft.owner.toLowerCase() ? (
                <Button
                  icon=<FaWallet />
                  btnName="List on Marketplace"
                  handleClick={() =>
                    router.push(`/reSellToken?id=${nft.tokenId}&tokenURI=${nft.tokenURI}&price=${nft.price}`)
                  }
                  classStyle={Style.button}
                />
              ) : (
                <Button icon=<FaWallet /> btnName="Buy NFT" handleClick={() => buyNFT(nft)} classStyle={Style.button} />
              )}

              <Button icon=<FaPercentage /> btnName="Make offer" handleClick={() => {}} classStyle={Style.button} />
            </div>

            {/* Rendering NFTTab  */}

            <div className={Style.NFTDescription_box_profile_biding_box_tabs}>
              <button onClick={(e) => openTabs(e)}>Bid History</button>
              <button onClick={(e) => openTabs(e)}>Provanance</button>
              <button onClick={() => openOwner()}>Owner</button>
            </div>

            {history && (
              <div className={Style.NFTDescription_box_profile_biding_box_card}>
                <NFTTabs dataTab={historyArray} />
              </div>
            )}
            {provanance && (
              <div className={Style.NFTDescription_box_profile_biding_box_card}>
                <NFTTabs dataTab={provananceArray} />
              </div>
            )}

            {owner && (
              <div className={Style.NFTDescription_box_profile_biding_box_card}>
                <NFTTabs dataTab={ownerArray} icon=<MdVerified /> />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDescription;
