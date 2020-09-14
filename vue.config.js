const packageName = require('./package.json').name;
module.exports = {
    devServer: {
        port:8083,
        headers:{
            'Access-Control-Allow-Origin':'*'
        }
      },
    configureWebpack: {
        output: {
            library: `${packageName}-[name]`,
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${packageName}`,
        },
    }
};