const webpack = require("webpack");

module.exports = function override(config) {
    // 'path'와 'os' polyfill 적용
    config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: require.resolve("browserify-fs"),
        path: require.resolve("path-browserify"),
        os: require.resolve("os-browserify/browser"),
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
    };
    config.plugins = [
        new webpack.ProvidePlugin({
            process: "process/browser",
            Buffer: ["buffer", "Buffer"],
        }),
        ...config.plugins,
    ];

    return config;
};
