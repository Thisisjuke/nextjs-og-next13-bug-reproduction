/** @type {import('next').NextConfig} */
const { withPlaiceholder } = require("@plaiceholder/next");

const nextConfig = {
  images: {
    domains: ["picsum.photos"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    });
    return config;
  },
  output: "standalone",
};

module.exports = withPlaiceholder(nextConfig);
