import React from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";

//INTERNAL IMPORT
import Style from "./DaysComponents.module.css";
import images from "../../../img";

const DaysComponents = ({ element, Ikey }) => {
  return (
    <div className={Style.daysComponent}>
      <div className={Style.daysComponent_box}>
        <div className={Style.daysComponent_box_img}>
          <Image
            src={element.background}
            className={Style.daysComponent_box_img_img}
            alt="profile backgound"
            width={500}
            height={300}
          />
        </div>

        <div className={Style.daysComponent_box_profile}>
          <Image
            src={images.creatorbackground2}
            className={Style.daysComponent_box_img_1}
            alt="profile"
            width={150}
            height={150}
          />

          <Image
            src={images.creatorbackground2}
            className={Style.daysComponent_box_img_2}
            alt="profile"
            width={150}
            height={150}
          />

          <Image
            src={images.creatorbackground2}
            className={Style.daysComponent_box_img_3}
            alt="profile"
            width={150}
            height={150}
          />
        </div>

        <div className={Style.daysComponent_box_title}>
          <h2>Amazing Collection</h2>
          <div className={Style.daysComponent_box_title_info}>
            <div className={Style.daysComponent_box_title_info_profile}>
              <Image
                src={element.user}
                className={Style.daysComponent_box_title_info_profile_img}
                alt="profile image"
                width={30}
                height={30}
              />
              <p>
                Creator
                <span>
                  {element.name} <MdVerified />
                </span>
              </p>
            </div>

            <div className={Style.daysComponent_box_title_info_price}>
              <small> 1.22 ETH</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaysComponents;
