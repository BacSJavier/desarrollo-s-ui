const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ]
})
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/FinalDS/'
    : '/'  
}
module.exports = {
  devServer: {
    port: 8081, // reemplaza 8081 con el puerto que quieras
    // proxy:{
    //   '/api':{
    //     target: 'http://localhost:8080'
    //   }
    //}
  },
  // otras configuraciones aquí...
};