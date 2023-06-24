import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../components/ComponentIndex";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import Style from "../loginAndSignUp/loginAndSignUp.module.css";

import images from "../img";

const signUp = () => {
  const [activeBtn, setActiveBtn] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  const collectData = async () => {
    let response = await fetch("http://localhost:3000/api/v1/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        passwordConfirm: confirmPassword,
      }),
    });

    const result = await response.json();
    console.log(result);
    router.push("/");
  };

  const socialImage = [
    {
      social: images.facebook,
      name: "Continue with Facebook",
    },
    {
      social: images.twitter,
      name: "Continue with twitter",
    },
    {
      social: images.facebook,
      name: "Continue with Facebook",
    },
  ];

  return (
    <div className={Style.user}>
      <div className={Style.user_box}>
        <div className={Style.user_box_social}>
          {socialImage.map((el, i) => (
            <div
              key={i + 1}
              onClick={() => setActiveBtn(i + 1)}
              className={`${Style.user_box_social_item} ${activeBtn == i + 1 ? Style.active : ""}`}
            >
              <Image src={el.social} alt={el.name} width={30} height={30} className={Style.user_box_social_item_img} />
              <p>
                <span>{el.name}</span>
              </p>
            </div>
          ))}
        </div>
        <p className={Style.user_box_or}>OR</p>

        <div className={Style.user_box_input}>
          <div className={Style.user_box_input_box}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div className={Style.user_box_input_box}>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              placeholder="example@emample.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className={Style.user_box_input_box}>
            <label htmlFor="password" className={Style.user_box_input_box_label}>
              <p>Password</p>
            </label>
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div className={Style.user_box_input_box}>
            <label htmlFor="ConfirmPassword" className={Style.user_box_input_box_label}>
              <p>ConfirmPassword</p>
            </label>
            <input
              type="password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>

          <p>
            <a href="#">Forget password</a>
          </p>
        </div>

        <Button btnName="Continue" classStyle={Style.button} handleClick={collectData} />
      </div>
    </div>
  );
};

export default signUp;
