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
        return webpackConfig;
      },
    },
  };