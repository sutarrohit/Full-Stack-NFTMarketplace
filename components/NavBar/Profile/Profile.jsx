import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUserAlt, FaRegImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownloadOff, TbDownload } from "react-icons/tb";

//INTERNAL IMPORT
import Style from "./Profile.module.css";
import images from "../../../img";

const Profile = ({ currentAccount, setProfile }) => {
  return (
    <div
      className={Style.profile}
      onClick={() => {
        setProfile(false);
      }}
    >
      {/*Profile Account */}
      <div className={Style.profile_account}>
        <Image src={images.user1} alt="user profile" width={50} height={50} className={Style.profile_account_img} />
        <div className={Style.profile_account_info}>
          <p>Jackson Baker</p>
          <small>{`0${currentAccount.slice(1, 7)}...${currentAccount.slice(38, 42)}`}</small>
        </div>
      </div>

      {/*Profile Menu */}
      <div className={Style.profile_menu}>
        {/*Menu one*/}
        <div className={Style.profile_menu_one}>
          <div className={Style.profile_menu_one_item}>
            <FaUserAlt />
            <p>
              <Link href={{ pathname: "/author" }}>My Profile</Link>
            </p>
          </div>

          <div className={Style.profile_menu_one_item}>
            <FaRegImage />
            <p>
              <Link href={{ pathname: "/author" }}>My Items</Link>
            </p>
          </div>

          <div className={Style.profile_menu_one_item}>
            <FaUserEdit />
            <p>
              <Link href={{ pathname: "/account" }}>Edit Profile</Link>
            </p>
          </div>
        </div>

        {/*Menu two*/}
        <div className={Style.profile_menu_two}>
          <div className={Style.profile_menu_one_item}>
            <MdHelpCenter />
            <p>
              <Link href={{ pathname: "/contactus" }}>Help</Link>
            </p>
          </div>

          <div className={Style.profile_menu_one_item}>
            <TbDownload />
            <p>
              <Link href={{ pathname: "/aboutus" }}>About Us</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
