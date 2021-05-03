module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/boardgames/'   //任意
    : '/',
  transpileDependencies: [
    'vuetify'
  ]
}
