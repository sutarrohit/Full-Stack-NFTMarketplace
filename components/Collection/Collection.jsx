import React, { useState } from "react";
import {
  BsCalculator,
  BsCalendar2,
  BsCalendar3,
  BsFillAlarmFill,
  BsFillCalendarDateFill,
  BsFillCalender3,
} from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./Collection.module.css";
import DaysComponents from "./DaysComponents/DaysComponents";
import images from "../../img";

const Collection = () => {
  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

  const cardArray = [
    {
      background: images.sport,
      user: images.user1,
      name: "Jackson Baker",
    },
    {
      background: images.cyber1,
      user: images.user2,
      name: "Giada Mann",
    },
    {
      background: images.ai4,
      user: images.user10,
      name: "Easton Johnson",
    },
    {
      background: images.bored1,
      user: images.user3,
      name: "Everly Williams",
    },
    {
      background: images.hubby,
      user: images.user4,
      name: "Sofia Brown",
    },
    {
      background: images.creatorbackground6,
      user: images.user5,
      name: "Harrison Garcia",
    },
    {
      background: images.bored3,
      user: images.user6,
      name: "Emma Jones",
    },
    {
      background: images.ai1,
      user: images.user8,
      name: "Olivia Miller",
    },
  ];
  const followingArray = [
    {
      background: images.ai1,
      user: images.user10,
      name: "Easton Johnson",
    },
    {
      background: images.creatorbackground6,
      user: images.user3,
      name: "Everly Williams",
    },
    {
      background: images.cyber1,
      user: images.user4,
      name: "Sofia Brown",
    },
    {
      background: images.bored1,
      user: images.user5,
      name: "Harrison Garcia",
    },
    {
      background: images.bored2,
      user: images.user6,
      name: "Emma Jones",
    },
  ];
  const newsArray = [
    {
      background: images.founder2,
      user: images.user10,
      name: "Easton Johnson",
    },
    {
      background: images.founder4,
      user: images.user3,
      name: "Everly Williams",
    },

    {
      background: images.ai3,
      user: images.user6,
      name: "Emma Jones",
    },
    {
      background: images.ai4,
      user: images.user8,
      name: "Olivia Miller",
    },
  ];
  // Functions
  const openPopular = () => {
    if (!popular) {
      setPopular(true);
      setFollowing(false);
      setNews(false);
    } else {
      setPopular(false);
    }
  };

  const openFollower = () => {
    if (!following) {
      setFollowing(true);
      setPopular(false);
      setNews(false);
    } else {
      setFollowing(false);
    }
  };

  const openNews = () => {
    if (!news) {
      setNews(true);
      setFollowing(false);
      setPopular(false);
    } else {
      setNews(false);
    }
  };

  return (
    <div className={Style.collection}>
      <div className={Style.collection_title}>
        <h2>Top List Creators</h2>
        <div className={Style.collection_collections}>
          {/* Buttons */}
          <div className={Style.collection_collections_btn}>
            <button onClick={() => openPopular()}>
              <BsFillAlarmFill /> Last 24 Hours
            </button>
            <button onClick={() => openFollower()}>
              <BsCalendar3 /> Last 7 days
            </button>
            <button onClick={() => openNews()}>
              <BsFillCalendarDateFill /> Last 30 days
            </button>
          </div>
        </div>
      </div>

      {/* Display Collections */}
      {popular && (
        <div className={Style.collection_box}>
          {cardArray.map((element, Ikey) => (
            <DaysComponents key={Ikey + 1} element={element} Ikey={Ikey} />
          ))}
        </div>
      )}

      {following && (
        <div className={Style.collection_box}>
          {followingArray.map((element, Ikey) => (
            <DaysComponents key={Ikey + 1} element={element} Ikey={Ikey} />
          ))}
        </div>
      )}

      {news && (
        <div className={Style.collection_box}>
          {newsArray.map((element, Ikey) => (
            <DaysComponents key={Ikey + 1} element={element} Ikey={Ikey} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Collection;
