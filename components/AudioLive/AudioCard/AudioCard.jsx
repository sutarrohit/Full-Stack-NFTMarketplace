import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";

//INTERNAL IMPORT
import Style from "./AudioCard.module.css";
import images from "../../../img";
import LikeProfile from "../../LikeProfile/LikeProfile";

const AudioCard = () => {
  const [like, setLike] = useState(false);
  const [play, setPlay] = useState(false);

  // Function

  const likeNft = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  const plyerMusic = () => {
    if (!play) {
      setPlay(true);
    } else {
      setPlay(false);
    }
  };

  return (
    <div className={Style.audioCard}>
      <div className={Style.audioCard_box}>
        {/* Like  */}
        <div className={Style.audioCard_box_like_time}>
          <div
            className={Style.audioCard_box_like}
            onClick={() => {
              likeNft();
            }}
          >
            {like ? (
              <AiFillHeart className={Style.audioCard_box_like_icon} />
            ) : (
              <AiOutlineHeart className={Style.audioCard_box_like_icon_unlike} />
            )}

            <span>24</span>
          </div>

          {/* Time */}
          <div className={Style.audioCard_box_time}>
            <div className={Style.audioCard_box_time_remaing}>
              <small>Remaing Time</small>
              <h4>3h : 15m :20s</h4>
            </div>
          </div>
        </div>

        {/* Music Player */}
        <div className={Style.audioCard_box_player}>
          <Image src={images.musiceWave} className={Style.audioCard_box_player_wave} alt="music" width={200} />
          <div
            className={Style.audioCard_box_musicPlayer}
            onClick={() => {
              plyerMusic();
            }}
          >
            {play ? (
              <div className={Style.audioCard_box_musicPlayer_icon}>
                <TbPlayerPause />
              </div>
            ) : (
              <div className={Style.audioCard_box_musicPlayer_icon}>
                <TbPlayerPlay />
              </div>
            )}
          </div>
        </div>

        {/* AudioBox Details */}
        <div className={Style.audioCard_box_details}>
          <div className={Style.audioCard_box_details_info}>
            <h4>NFT music #1123</h4>
            <div className={Style.audioCard_box_details_info_price}>
              <small>Price</small>
              <p>$2481.44</p>
            </div>
          </div>

          <div className={Style.audioCard_box_details_stock}>
            <LikeProfile />
            <small>24 in stock</small>
          </div>
        </div>

        <div className={Style.audioCard_box_img}>
          <Image src={images.creatorbackground10} alt="background" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default AudioCard;
