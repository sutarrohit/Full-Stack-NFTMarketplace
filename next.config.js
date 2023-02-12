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

  // async headers() {
  //   return [
  //     {
  //       source: "/api/(.*)",
  //       //source: "http://localhost:3000:",
  //       headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
  //     },
  //   ];
  // },

  // async headers() {
  //   return [
  //     {
  //       source: "//infura-ipfs.io/ipfs/(.*)",
  //       source: "//infura-ipfs.io/ipfs/:path*",
  //       source: "https://infura-ipfs.io/",
  //       source: "//ipfs.infura.io/ipfs/(.*)",
  //       source: "//localhost:3000/",
  //       headers: [
  //         { key: "Access-Control-Allow-Credentials", value: "true" },
  //         { key: "Access-Control-Allow-Origin", value: "https://infura-ipfs.io" },
  //         { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
  //         {
  //           key: "Access-Control-Allow-Headers",
  //           value:
  //             "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, infura-ipfs.io",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
