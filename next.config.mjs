/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    // Example: Add a rule for TypeScript files
    config.module.rules.push({
      test: /\.ts$/,
      use: "ts-loader",
      exclude: /node_modules/,
    });

    // Example: Add a rule for CSS files
    config.module.rules.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
    });

    // Client-side only configurations
    if (!isServer) {
      config.module.rules.push({
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      });
    }

    return config;
  },
};

export default nextConfig;
