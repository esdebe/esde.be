module.exports = {
  webpack: (config) => ({
    ...config,
    module: {
      ...config.module,
      rules: config.module.rules.concat([
        {
          test: /\.md$/,
          loader: 'raw-loader',
        },
      ]),
    },
  }),
}
