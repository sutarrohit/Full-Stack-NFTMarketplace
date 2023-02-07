import React from "react";
import Image from "next/image";
import { BsCircleFill } from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./Category.module.css";
import images from "../../img";

const Category = () => {
  const CategoryArray = [
    {
      background: images.Dance,
      name: "Dance",
    },
    {
      background: images.sport,
      name: "Sports",
    },
    {
      background: images.Entertainment,
      name: "Entirtment Art",
    },
    {
      background: images.animal,
      name: "Animals Art",
    },
    {
      background: images.music,
      name: "Music",
    },
    {
      background: images.digital,
      name: "Digital Arts",
    },
    {
      background: images.hubby,
      name: "Hubby",
    },
    {
      background: images.bad,
      name: "Bad Arts",
    },
    {
      background: images.art,
      name: "Arts",
    },
    {
      background: images.myfav,
      name: "My Fav",
    },
  ];

  return (
    <div className={Style.box_category}>
      <div className={Style.category}>
        {CategoryArray.map((element, Ikey) => (
          <div className={Style.category_box} key={Ikey + 1}>
            <Image
              src={element.background}
              className={Style.category_box_image}
              alt="Background Image"
              width={400}
              height={150}
              objectFit="cover"
            />

            <div className={Style.category_box_title}>
              <span>
                <BsCircleFill />
              </span>
              <div className={Style.category_box_title_info}>
                <h4>{element.name}</h4>
                <small>1995 NFTS</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
