import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Error.module.css";
import images from "../../img";

//SMART CONTRCAT IMPORT CONTEXT
import { NFTMarketplaceContext } from "../../context/NFTMarketplaceContext";

const Error = () => {
  const { error, setOpenError, setError } = useContext(NFTMarketplaceContext);
  return (
    <div
      className={Style.Error}
      onClick={() => {
        setOpenError(false), setError("");
      }}
    >
      <div className={Style.Error_box} onClick={() => setError("")}>
        <div className={Style.Error_box_info}>
          <Image
            alt="error"
            src={images.errorgif}
            width={200}
            height={200}
            objectFit="cover"
            className={Style.Error_box_info_img}
          />
          <p>{error}</p>
        </div>
      </div>
    </div>
  );
};

export default Error;
