const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用依赖包主题
  title: "Muyun's wiki",
  description: '',
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins,
  themeConfig,
}

// module.exports = {
//   themeConfig: {
//     repo: 'muyun99/Wiki', // Github仓库地址
//     docsDir: 'docs', // .md文件放在了docs目录下
//     editLinks: true, // 启用编辑链接
//     editLinkText: '编辑',
//   }
// }