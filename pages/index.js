import React, { useContext, useEffect, useState } from "react";

//INTENAL IMPORT
import Style from "../styles/index.module.css";
import {
  HeroSection,
  Service,
  Filter,
  NFTCard,
  BigNFTSlider,
  Subscribe,
  Title,
  Category,
  Collection,
  FollowerTab,
  AudioLive,
  Slider,
  Brand,
  Video,
  Loader,
} from "../components/ComponentIndex";
import { getTopCreators } from "../TopCreator/TopCreators";

import { NFTMarketplaceContext } from "../context/NFTMarketplaceContext";

const Home = () => {
  const { fetchNFTS } = useContext(NFTMarketplaceContext);
  const [nfts, setNFTs] = useState([]);
  const [nftsCopys, setNftCopys] = useState([]);

  //CRATOR LIST
  const creators = getTopCreators(nfts);
  console.log(creators);

  useEffect(() => {
    fetchNFTS()?.then((item) => {
      setNFTs(item.reverse());
      setNftCopys(item);
    });
  }, []);

  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <Title heading="Featured NFTs" paragraph="Discover the most oustanding NFTs in all topics of life." />
      <Filter />
      {nfts.length == 0 ? <Loader /> : <NFTCard NFTData={nfts} />}
      <BigNFTSlider />
      <Slider />
      <Title heading="New Collection" paragraph="Discover the most oustanding NFTs in all topics of life." />
      <Collection />
      <Title heading="Browse by category" paragraph="Explore the NFTs in the most featured categories." />
      <Category />
      <Title heading="Audio Collection" paragraph="Discover the most outstanding NFTs in all topics of life." />
      <AudioLive />
      <Subscribe />

      {creators.length == 0 ? <Loader /> : <FollowerTab TopCreator={creators} />}

      <Brand />
      <Video />
    </div>
  );
};

export default Home;
