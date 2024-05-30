/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.m?js$/,
            resolve: {
                fullySpecified: false,
            },
        });
        return config;
    },
    experimental: {
        esmExternals: true,
    },
};



export default nextConfig;
