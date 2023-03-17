import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

// ICON IMPORT
import { MdNotifications, MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";

//INTENAL IMPORTS
import Style from "./NavBar.module.css";
import { Discover, HelpCenter, Notification, Profile, SideBar } from "./index";
import { Button, Error } from "../ComponentIndex";
import images from "../../img";

// IMPORT FROM SMART CONTRACT

import { NFTMarketplaceContext } from "../../context/NFTMarketplaceContext";

export const NFTMarketTheme = React.createContext();

const NavBar = () => {
  //USESTATE
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [network, setNetwork] = useState(false);
  const [blockchainNetwork, SetBlockchainNetwork] = useState("");
  const [ThemeColor, setThemeColor] = useState(false);

  const router = useRouter();

  // const openMenu = (e) => {
  //   const btnText = e.target.innerText;
  //   if (btnText == "Discover") {
  //     setDiscover(true);
  //     setHelp(false);
  //     setNotification(false);
  //     setProfile(false);
  //   } else if (btnText == "Help Center") {
  //     setDiscover(false);
  //     setHelp(true);
  //     setNotification(false);
  //     setProfile(false);
  //   } else {
  //     setDiscover(false);
  //     setHelp(false);
  //     setNotification(false);
  //     setProfile(false);
  //   }
  // };

  const openMenuDiscover = () => {
    if (!discover) {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else {
      setDiscover(false);
    }
  };

  const openMenuHelp = () => {
    if (!help) {
      setHelp(true);
      setDiscover(false);
      setNotification(false);
      setProfile(false);
    } else {
      setHelp(false);
    }
  };

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setHelp(false);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setProfile(true);
      setNotification(false);
      setDiscover(false);
      setHelp(false);
    } else {
      setProfile(false);
    }
  };

  const openSideBar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true);
    } else {
      setOpenSideMenu(false);
    }
  };

  // SMART CONTRACT SECTION
  const { currentAccount, connectWallet, blockchain, setTheme, openError } = useContext(NFTMarketplaceContext);

  const address = `0${currentAccount.slice(1, 7)}...${currentAccount.slice(38, 42)}`;

  const backHome = () => {
    router.push("/");
  };

  const changeNetwork = () => {
    if (!network) {
      setNetwork(true);
    } else {
      setNetwork(false);
    }
  };

  const getNetwork = () => {
    if (blockchain == "5") {
      SetBlockchainNetwork("ETHGoerli");
    }
    if (blockchain == "1") {
      SetBlockchainNetwork("Ethereum");
    }
    if (blockchain == "137") {
      SetBlockchainNetwork("Polygon");
    }
    if (blockchain == "80001") {
      SetBlockchainNetwork("Polygon-Mumbai");
    }
  };

  const themeColor = () => {
    if (!ThemeColor) {
      setThemeColor(true);
    } else {
      setThemeColor(false);
    }
  };

  const myTheme = () => {
    setTheme("dark-theme");
  };

  useEffect(() => {
    getNetwork();
  });

  return (
    <NFTMarketTheme.Provider value={{ ThemeColor }}>
      <div className={Style.navbar}>
        <div className={Style.navbar_container}>
          {/* Left Section of NavBar */}
          <div className={Style.navbar_container_left}>
            <div className={Style.logo} onClick={() => backHome()}>
              {/* {ThemeColor ? (
                <Image
                  src={images.project1}
                  alt="NFT MarketPlace"
                  height={150}
                  className={Style.navbar_container_left_logo}
                />
              ) : (
                <Image
                  src={images.project2}
                  alt="NFT MarketPlace"
                  width={150}
                  height={150}
                  className={Style.navbar_container_left_logo}
                />
              )} */}

              <Image
                src={images.project1}
                alt="NFT MarketPlace"
                height={150}
                className={Style.navbar_container_left_logo}
              />
            </div>

            <div className={Style.navbar_container_left_box_input}>
              <div className={Style.navbar_container_left_box_input_box}>
                <input type="text" placeholder="Search NFT" />
                <BsSearch onClick={() => {}} className={Style.search_icon} />
              </div>
            </div>
          </div>

          {/* -----------Right Section of NavBar------------- */}
          <div className={Style.navbar_container_right}>
            {/* DISCOVER MENU */}
            <div className={Style.navbar_container_right_discover}>
              {/* <p onClick={(e) => openMenu(e)}>Discover</p> */}
              <p onClick={() => openMenuDiscover()}>Discover</p>
              {discover && (
                <div className={Style.navbar_container_right_discover_box} onClick={() => openMenuDiscover()}>
                  <Discover />
                </div>
              )}
            </div>

            {/* HELP MENU */}
            <div className={Style.navbar_container_right_help}>
              <p onClick={() => openMenuHelp()}>Help Center</p>
              {help && (
                <div className={Style.navbar_container_right_help_box} onClick={() => openMenuHelp()}>
                  <HelpCenter />
                </div>
              )}
            </div>

            {/* NOTIFICATION MENU*/}
            <div className={Style.navbar_container_right_notify}>
              <MdNotifications className={Style.notify} onClick={() => openNotification()} />
              {notification && <Notification />}
            </div>

            <div
              className={Style.navbar_container_right_address}
              onClick={() => {
                changeNetwork();
              }}
            >
              {currentAccount == "" ? "" : <p>{network == true ? blockchainNetwork : address}</p>}
            </div>

            {/*CREATE BUTTON SECTION */}
            <div className={Style.navbar_container_right_button}>
              {currentAccount == "" ? (
                <Button btnName="Connect" handleClick={() => connectWallet()} />
              ) : (
                <Link href={{ pathname: "/uploadNFT" }}>
                  <Button btnName="Create NFT" handleClick={() => {}} />
                </Link>
              )}
            </div>

            {/*USER PROFILE */}
            <div className={Style.navbar_container_right_profile_box}>
              <div className={Style.navbar_container_right_profile}>
                <Image
                  src={images.user1}
                  alt="Profile"
                  width={40}
                  height={40}
                  onClick={() => openProfile()}
                  className={Style.navbar_container_right_profile}
                />
                {profile && <Profile currentAccount={currentAccount} setProfile={setProfile} />}
              </div>
            </div>

            {/*Theme SECTION */}
            <div className={Style.navbar_container_right_button}>
              {ThemeColor ? (
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

            {/*MENU BUTTON FOR MOBILE */}
            <div className={Style.navbar_container_right_menuBtn}>
              <CgMenuRight
                className={Style.menuIcon}
                onClick={() => {
                  openSideBar();
                }}
              />
            </div>
          </div>
        </div>

        {/* SIDEBAR COMPONENT FOR MOBILE */}
        {openSideMenu && (
          <div className={Style.sideBar}>
            <SideBar setOpenSideMenu={setOpenSideMenu} currentAccount={currentAccount} connectWallet={connectWallet} />
          </div>
        )}

        {openError && <Error />}
      </div>
    </NFTMarketTheme.Provider>
  );
};

export default NavBar;
