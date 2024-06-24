/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    ppr: 'incremental',
  },
};

module.exports = nextConfig;
