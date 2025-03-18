const webpack = require('webpack');

module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        webpackConfig.module.rules = webpackConfig.module.rules.filter(
          (rule) =>
            !rule.use ||
            !rule.use.some((loader) =>
              typeof loader === "string" && loader.includes("source-map-loader")
            )
        );
        webpackConfig.resolve.fallback = {
            "module": false,
            "fs": false, // Node.js fs 모듈은 브라우저에서 사용할 수 없음
            "path": require.resolve("path-browserify"),
            "stream": require.resolve("stream-browserify"),
            "util": require.resolve("util/"),
            "crypto": require.resolve("crypto-browserify"),
            "os": require.resolve("os-browserify/browser"),
            "url": require.resolve("url/"),
            "vm": require.resolve("vm-browserify"),
            "buffer": require.resolve("buffer/"),
            "zlib": require.resolve("browserify-zlib"),
            "querystring": require.resolve("querystring-es3"),
            "constants": require.resolve("constants-browserify"),
            "assert": require.resolve("assert/"),
            "http": require.resolve("stream-http"),
            "https": require.resolve("https-browserify"),
            "tty": require.resolve("tty-browserify"),
            "child_process": false, // child_process는 브라우저에서 사용 불가능
            "worker_threads": false, // worker_threads도 브라우저에서 사용할 수 없음
        };
        webpackConfig.plugins.push(
            new webpack.ProvidePlugin({
                process: "process/browser",
                Buffer: ["buffer", "Buffer"],
            })
        );
        webpackConfig.module.rules.push({
          test: /\.d\.ts$/,
          loader: "ts-loader",
        });
        return webpackConfig;
      },
    },
  };