const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// module.exports = {
//   devServer: {
//       disableHostCheck: false,
//       host: "127.0.0.1",
//       port: 8080,
//       https: false,
//       hotOnly: false,
//       proxy: null
//   },
// };
