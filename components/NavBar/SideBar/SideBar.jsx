import React, { use, useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import { MdNotifications, MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";

import { AiFillCloseCircle } from "react-icons/ai";
import { FiSun } from "react-icons/fi";
import { NFTMarketplaceContext } from "../../../context/NFTMarketplaceContext";
import { NFTMarketTheme } from "../NavBar";

// INTERNAL IMPORT
import Style from "./SideBar.module.css";
import images from "../../../img";
import Button from "../../Button/Button";

const SideBar = ({ setOpenSideMenu, currentAccount, connectWallet }) => {
  //----USESTATE
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  const [SideBarThemeColor, setSideBarThemeColor] = useState(false);

  const { setTheme } = useContext(NFTMarketplaceContext);
  const { ThemeColor } = useContext(NFTMarketTheme);

  //-------Discover Navigation Menu
  const discover = [
    { name: "Collection", link: "collection" },
    { name: "Search", link: "searchPage" },
    { name: "Author Profile", link: "author" },
    // { name: "NFT Details", link: "NFT-details" },
    { name: "Upload NFT", link: "uploadNFT" },
    { name: "Account Setting", link: "account" },
    { name: "Connect Wallet", link: "connectWallet" },
    { name: "Blog", link: "blog" },
  ];

  //--------Help Center Navigation Menu
  const helpCenter = [
    { name: "About", link: "aboutus" },
    { name: "Contract Us", link: "contactus" },
    { name: "Sign Up", link: "signUp" },
    { name: "Sign In", link: "login" },
    { name: "Subscription", link: "subscription" },
  ];

  // Functions
  const openDiscoverMenu = () => {
    if (!openDiscover) {
      setOpenDiscover(true);
    } else {
      setOpenDiscover(false);
    }
  };

  const openHelpMenu = () => {
    if (!openHelp) {
      setOpenHelp(true);
    } else {
      setOpenHelp(false);
    }
  };

  const closeSideBar = () => {
    setOpenSideMenu(false);
  };

  const themeColor = () => {
    if (!SideBarThemeColor) {
      setSideBarThemeColor(true);
    } else {
      setSideBarThemeColor(false);
    }
  };

  const myTheme = () => {
    setTheme("dark-theme");
  };

  return (
    <div className={Style.SideBar}>
      <AiFillCloseCircle className={Style.sideBar_closeBtn} onClick={() => closeSideBar()} />
      {/*SideBar Box */}

      <div className={Style.SideBar_box} onClick={() => setOpenSideMenu(false)}>
        {/* <Link href={{ pathname: "./" }}>
          <Image src={images.logo} alt="logo" width={150} heigth={150} />
        </Link> */}

        <Link href={{ pathname: "./" }}>
          {SideBarThemeColor ? (
            <Image src={images.project1} alt="NFT MarketPlace" height={110} className={Style.sideBar_logo} />
          ) : (
            <Image src={images.project2} alt="NFT MarketPlace" height={110} className={Style.sideBar_logo} />
          )}
        </Link>

        <p>Discover the most outstanding articles on all topics of NFT</p>

        <div className={Style.sideBar_social}>
          <a href="#">
            <TiSocialFacebook />
          </a>
          <a href="#">
            <TiSocialLinkedin />
          </a>
          <a href="#">
            <TiSocialTwitter />
          </a>
          <a href="#">
            <TiSocialYoutube />
          </a>
          <a href="#">
            <TiSocialInstagram />
          </a>
        </div>
      </div>

      {/*SideBar Menu*/}
      <div className={Style.sideBar_menu}>
        {/*Theme SECTION */}
        <div className={Style.sidebar_theme_button}>
          {SideBarThemeColor ? (
            <FiSun
              onClick={() => {
                themeColor(), myTheme();
              }}
            />
          ) : (
            <MdOutlineDarkMode
              onClick={() => {
                themeColor(), myTheme();
              }}
            />
          )}
        </div>
        {/* Discover SideBar Menu*/}
        <div>
          <div className={Style.sideBar_menu_box} onClick={() => openDiscoverMenu()}>
            <p>Discover</p>
            <TiArrowSortedDown />
          </div>
          {openDiscover && (
            <div className={Style.sideBar_discover} onClick={() => setOpenSideMenu(false)}>
              {discover.map((element, Ikey) => (
                <p key={Ikey + 1}>
                  <Link href={{ pathname: `${element.link}` }} key={Ikey + 1}>
                    {element.name}
                  </Link>
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Help SideBar Menu*/}
        <div>
          <div className={Style.sideBar_menu_box} onClick={() => openHelpMenu()}>
            <p>Help Center</p>
            <TiArrowSortedDown />
          </div>
          {openHelp && (
            <div className={Style.sideBar_discover} onClick={() => setOpenSideMenu(false)}>
              {helpCenter.map((element, Ikey) => (
                <p key={Ikey + 1}>
                  <Link href={{ pathname: `${element.link}` }} key={Ikey + 1}>
                    {element.name}
                  </Link>
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      {/*SideBar Button*/}
      <div className={Style.sideBar_button}>
        {currentAccount == "" ? (
          <Button
            btnName="Connect"
            handleClick={() => {
              connectWallet();
            }}
          />
        ) : (
          <Link href={{ pathname: "/uploadNFT" }}>
            <Button btnName="Create NFT" handleClick={() => {}} />
          </Link>
        )}

        {/* <Button btnName="Connect Wallet" handleClick={() => {}} /> */}
      </div>
    </div>
  );
};

export default SideBar;
