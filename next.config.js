const withCSS = require('@zeit/next-css')
const path = require('path')
const Restapify = require('restapify').default

const apiFolderPath = path.resolve(__dirname, './mockedApi')

const rpfy = new Restapify({
  rootDir: apiFolderPath,
  openDashboard: true
})

rpfy.on('error', ({error, message}) => {
  console.log(error + ' ' + message)
  process.exit(1)
})

rpfy.run()

module.exports = withCSS({
  cssLoaderOptions: {
    url: false
  }
});