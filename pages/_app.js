import { useEffect } from "react";
import "../styles/globals.css";

//INTERNAL IMPORT
import { NavBar, Footer } from "../components/ComponentIndex";
import { NFTMarketplaceProvider } from "../context/NFTMarketplaceContext";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <NFTMarketplaceProvider>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </NFTMarketplaceProvider>
    </div>
  );
};

export default MyApp;
