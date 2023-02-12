/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: [
      "ipfs.io",
      "greatnft.infura-ipfs.io",
      "ipfs.infura.io",
      "infura-ipfs.io",
      "infura-ipfs.io/ipfs",
      "https://infura-ipfs.io",
    ],
  },
};

module.exports = nextConfig;
