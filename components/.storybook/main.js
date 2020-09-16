// const path = require('path')

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  // FIXME: Support CSS Modules for Storybook
  // webpackFinal: async (config) => {
  //   config.module.rules.push({
  //     test: /\.module\.css$/,
  //     use: [
  //       'style-loader',
  //       {
  //         loader: 'css-loader',
  //         options: {
  //           modules: true,
  //         },
  //       },
  //     ],
  //     include: path.resolve(__dirname, '../')
  //   })

  //   return config
  // },
}
