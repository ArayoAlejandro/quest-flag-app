module.exports = {
  build: {
    outDir: '../public'
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    },
  }
}