import type { NextConfig } from "next";

const nextConfig: NextConfig = {
      eslint: {
    // ❌ отключить ESLint полностью при сборке
    ignoreDuringBuilds: true,
  },
   images: {
    domains: [
      'images.ctfassets.net',
      'ak-d.tripcdn.com',
      'images.unsplash.com',
      'cdn.pixabay.com',
      'i.pinimg.com',
      "img.freepik.com",
      "healthylifedoctors.com",
      "www.shutterstock.com",
      "cdn.psychologytoday.com",
      "encrypted-tbn0.gstatic.com",
      "www.pmtoday.co.uk",
      'www.responsiblevacation.com' // ← добавляем этот домен,
    ],
  },
};

export default nextConfig;
