import React, { useContext, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

//INETNAL IMPORT
import Style from "./HeroSection.module.css";
import { Button } from "../ComponentIndex";
import images from "../../img";

const HeroSection = () => {
  const router = useRouter();

  const SearchNFT = () => {
    router.push("/searchPage");
  };
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        {/* Left Section */}
        <div className={Style.heroSection_box_left}>
          <h1>Discover, collect, and sell NFTs 🖼️</h1>
          <p>Discover the most outstanding NTFs in all topics of life. Creative your NTFs and sell them</p>
          <Button btnName="Start your search" handleClick={SearchNFT} />
        </div>

        {/* Right Section */}
        <div className={Style.heroSection_box_right}>
          <Image
            src={images.hero}
            alt="hero section"
            width={500}
            height={500}
            className={Style.heroSection_box_right_image}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
