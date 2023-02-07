import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Service.module.css";
import images from "../../img";

const Service = () => {
  return (
    <div className={Style.service}>
      <div className={Style.service_box}>
        <div className={Style.service_box_item}>
          <Image src={images.service1} alt="Filer and Discover" width={100} height={100} />
          <div className={Style.service_box_item_step}>
            <span>Step 1</span>
            <h3> Filter and Discover</h3>
            <p>Connect with wallet, discover, buy NTFs, sell your NFTs and earn money</p>
          </div>
        </div>

        <div className={Style.service_box_item}>
          <Image src={images.service2} alt="Choose and Select" width={100} height={100} />
          <div className={Style.service_box_item_step}>
            <span>Step 2</span>
            <h3>Choose and Select</h3>
            <p>Connect with wallet, discover, buy NTFs, sell your NFTs and earn money</p>
          </div>
        </div>

        <div className={Style.service_box_item}>
          <Image src={images.service3} alt="Connect Wallet" width={100} height={100} />
          <div className={Style.service_box_item_step}>
            <span>Step 3</span>
            <h3>Connect Wallet</h3>
            <p>Connect with wallet, discover, buy NTFs, sell your NFTs and earn money</p>
          </div>
        </div>

        <div className={Style.service_box_item}>
          <Image src={images.service4} alt="Start trading" width={100} height={100} />
          <div className={Style.service_box_item_step}>
            <span>Step 4</span>
            <h3>Start trading</h3>
            <p>Connect with wallet, discover, buy NTFs, sell your NFTs and earn money</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
