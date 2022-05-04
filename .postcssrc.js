module.exports = {
  plugins: {
    'postcss-pxtorem': {
      // rootValue: 75,
      rootValue ({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      propList: ['*']
    }
  }
}
