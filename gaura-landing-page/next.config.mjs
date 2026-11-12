/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Quality values <Image quality={...}> may use (75 is the default; 95 is
    // used for the hero photos so they stay sharp).
    qualities: [75, 95],
    // Course thumbnails (and other uploads) are served from Cloudinary.
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
};

export default nextConfig;
