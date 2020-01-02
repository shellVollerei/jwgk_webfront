/*
 * @Author       : fatewang
 * @Github       : https://github.com/Burning-Shadow
 * @Major        : Software Engineering
 * @SchoolStatus : 2016
 * @Date         : 2020-01-02 15:57:25
 * @LastEditors  : fatewang
 * @LastEditTime : 2020-01-02 15:57:49
 * @Description  : Edit it for yourself
 * @ContactMe    : siir_52721@qq.com
 */
const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  // 按需加载 antd
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  // 添加加载 less 的 javascriptEnabled 和 antd 的主题配置。
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
  }),
);