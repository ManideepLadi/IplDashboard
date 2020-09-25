module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/IplDashboard//'
        : '/',
  "transpileDependencies": [
    "vuetify"
  ]
}