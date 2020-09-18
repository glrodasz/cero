// https://github.com/storybookjs/storybook/blob/next/lib/core/src/server/preview/base-webpack.config.js#L51-L67
// https://github.com/storybookjs/storybook/issues/6055#issuecomment-521046352

const cssModules = () => async (config) => {
  config.module.rules.find(
    (rule) => rule.test.toString() === '/\\.css$/'
  ).exclude = /\.module\.css$/

  config.module.rules.push({
    test: /\.module\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
        },
      },
    ],
  })

  return config
}

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: cssModules(),
}
