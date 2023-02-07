import React, { useContext, useEffect } from "react";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./Discover.module.css";

const Discover = () => {
  // Discover Navigation Menu

  const discover = [
    { name: "Collection", link: "collection" },
    { name: "Search", link: "searchPage" },
    { name: "Author Profile", link: "author" },
    // { name: "NFT Details", link: "NFT-details" },
    { name: "Account Setting", link: "account" },
    { name: "Upload NFT", link: "uploadNFT" },
    { name: "Connect Wallet", link: "connectWallet" },
    { name: "Blog", link: "blog" },
  ];

  return (
    <div>
      {discover.map((element, Ikey) => (
        <div key={Ikey + 1} className={Style.discover}>
          <Link href={{ pathname: `${element.link}` }}>{element.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Discover;
