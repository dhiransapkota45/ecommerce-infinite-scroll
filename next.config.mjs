/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BACKEND_URL: process.env.BACKEND_URL
    },
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "thekayalabtest.s3.ap-south-1.amazonaws.com",
            port: ""
        }, {
            protocol: "https",
            hostname: "oriflamenepaltest.s3.ap-south-1.amazonaws.com",
            port: ""
        }]
    }
};

export default nextConfig;
