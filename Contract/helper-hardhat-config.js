const { ethers } = require("hardhat");

const networkConfig = {
  4: {
    name: "rinkeby",
    vrfCoordinatorV2: "0x6168499c0cffcacd319c818142124b7a15e857ab",
    entranceFee: ethers.utils.parseEther("0.01"),
    gasLane: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
    subscriptionId: "10426",
    callbackgasLimit: "2500000",
    interval: "30",
    mintFee: ethers.utils.parseEther("0.01"),
  },

  5: {
    name: "goerli",
    vrfCoordinatorV2: "0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D",
    entranceFee: ethers.utils.parseEther("0.01"),
    gasLane: "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15",
    subscriptionId: "3020",
    callbackgasLimit: "2500000",
    interval: "30",
    mintFee: ethers.utils.parseEther("0.01"),
    priceFeedAddress: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
  },

  31337: {
    name: "hardhat",
    entranceFee: ethers.utils.parseEther("0.01"),
    gasLane: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
    //Subscription id crates for mocks
    callbackgasLimit: "2500000",
    interval: "30",
    mintFee: ethers.utils.parseEther("0.01"),
  },
};

const devlopmentChains = ["hardhat", "localhost"];

module.exports = {
  networkConfig,
  devlopmentChains,
};
