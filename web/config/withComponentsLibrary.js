const path = require('path')
const transpileModules = require('next-transpile-modules')

const reactPath = path.resolve(__dirname, '../node_modules/react')
const withTranspileModules = transpileModules(['@glrodasz/components'])

// https://github.com/martpie/next-transpile-modules#i-have-trouble-with-duplicated-dependencies-or-the-invalid-hook-call-error-in-react
const resolveUniqueReactForHooks = {
  webpack: (config, options) => {
    if (options.isServer) {
      config.externals = ['react', ...config.externals]
    }

    config.resolve.alias['react'] = reactPath

    return config
  },
}

module.exports = () => withTranspileModules(resolveUniqueReactForHooks)
