/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@suwon-web-front/ui'],
  rewrites: async () => {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
