const { override, fixBabelImports,addLessLoader,addWebpackAlias,} = require('customize-cra');
const path = require("path");
const addCustomize = () => config => {
    if (process.env.NODE_ENV === 'production') {
      // 关闭sourceMap
      config.devtool = false;
    }
    console.log(config)
    return config;
  }
module.exports = override(
    addCustomize(),
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        lessOptions:{
            javascriptEnabled: true,
            modifyVars: { '@primary-color': '#1890ff' },
        }
    }),
    addWebpackAlias({
        '@':path.resolve(__dirname, "./src")
    })
);