import React from "react";
import Image from "next/image";

// INTENAL IMPORT
import Style from "./Notification.module.css";
import images from "../../../img";

const Notification = () => {
  return (
    <div className={Style.notification}>
      <p>Notification</p>
      <div className={Style.notification_box}>
        <div className={Style.notification_box_img}>
          <Image src={images.user1} alt="Profile image" width={50} height={50} className={Style.notification_box_img} />
        </div>
        <div className={Style.notification_box_info}>
          <h4>Jackson Baker</h4>
          <p>Measure action your user...</p>
          <small>3 minute ago</small>
        </div>
        <span className={Style.notification_box_new}></span>
      </div>
    </div>
  );
};

export default Notification;
