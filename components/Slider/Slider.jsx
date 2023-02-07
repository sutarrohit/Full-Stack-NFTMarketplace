import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";

//INTERNAL IMPORT
import Style from "./Slider.module.css";
import SliderCard from "./SliderCard/SliderCard";
import images from "../../img";

const Slider = () => {
  const sliderArrya = [
    {
      background: images.ai2,
      price: "1.242 ETH",
      name: "NFT Video #3922",
    },
    {
      background: images.bored2,
      price: "2.42 ETH",
      name: "NFT Video #2913",
    },
    {
      background: images.ai4,
      price: "0.84 ETH",
      name: "NFT Video #9532",
    },
    {
      background: images.ai3,
      price: "4.20 ETH",
      name: "NFT Video #0281",
    },
    {
      background: images.cyber1,
      price: "5.10 ETH",
      name: "NFT Video #5921",
    },
    {
      background: images.art,
      price: "0.40 ETH",
      name: "NFT Video #4281",
    },
  ];
  const [width, setWidth] = useState(0);
  const dragSlider = useRef();

  useEffect(() => {
    setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
  });

  // Scroll function
  const handleScroll = (direction) => {
    const { current } = dragSlider;
    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

    if (direction == "left") {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className={Style.slider}>
      <div className={Style.slider_box}>
        <h2>Explore NFTs Video</h2>

        {/* Slider Button */}
        <div className={Style.slider_box_button}>
          <p>Click on play button & explore NFTs</p>

          <div className={Style.slider_box_button_btn}>
            <div className={Style.slider_box_button_btn_icon} onClick={() => handleScroll("left")}>
              <TiArrowLeftThick />
            </div>

            <div className={Style.slider_box_button_btn_icon} onClick={() => handleScroll("right")}>
              <TiArrowRightThick />
            </div>
          </div>
        </div>

        {/* Motion Slider*/}
        <motion.div className={Style.slider_box_items} ref={dragSlider}>
          <motion.div
            className={Style.slider_box_item}
            ref={dragSlider}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {sliderArrya.map((element, Ikey) => (
              <SliderCard key={Ikey + 1} element={element} Ikey={Ikey} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;
