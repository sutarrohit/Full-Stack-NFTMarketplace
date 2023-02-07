import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import Style from "./Brand.module.css";
import images from "../../img";
import { Button } from "../ComponentIndex";

const Brand = () => {
  const router = useRouter();

  const CrateNFT = () => {
    router.push("/uploadNFT");
  };

  const DiscoverNFT = () => {
    router.push("/collection");
  };

  return (
    <div className={Style.Brand}>
      <div className={Style.Brand_box}>
        <div className={Style.Brand_box_left}>
          <Image src={images.logo} alt="brand logo" width={100} height={100} />
          <h1>Earn free crypto with Ciscrypt</h1>
          <p>A creative agency that lead and inspire.</p>

          <div className={Style.Brand_box_left_btn}>
            <Button
              btnName="Create"
              handleClick={() => {
                CrateNFT();
              }}
            />
            <Button
              btnName="Discover"
              handleClick={() => {
                DiscoverNFT();
              }}
            />
          </div>
        </div>
        <div className={Style.Brand_box_right}>
          <Image src={images.earn} className={Style.Brand_box_right_img} alt="brand logo" width={800} height={600} />
        </div>
      </div>
    </div>
  );
};

export default Brand;
