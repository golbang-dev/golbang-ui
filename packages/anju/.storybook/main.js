const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: ['@babel/preset-react', '@babel/preset-typescript'],
        plugins: ['babel-plugin-styled-components'],
      },
    });
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '../src'),
    ];
    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  },
};
