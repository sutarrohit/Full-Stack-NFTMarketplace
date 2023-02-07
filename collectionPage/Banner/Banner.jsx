import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Banner.module.css";

const Banner = ({ bannerImage }) => {
  return (
    <div className={Style.banner}>
      <div className={Style.banner_img}>
        <Image
          src={bannerImage}
          className={Style.banner_img_img}
          objectFit="cover"
          alt="background"
          width={1600}
          height={100}
        />
      </div>

      <div className={Style.banner_img_mobile}>
        <Image
          src={bannerImage}
          className={Style.banner_img_img}
          objectFit="cover"
          alt="background"
          width={1600}
          height={100}
        />
      </div>
    </div>
  );
};

export default Banner;
