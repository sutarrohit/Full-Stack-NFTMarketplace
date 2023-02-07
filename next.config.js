/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["greatnft.infura-ipfs.io", "ipfs.infura.io", "infura-ipfs.io/ipfs", "localhost"],
  },
};

module.exports = nextConfig;
