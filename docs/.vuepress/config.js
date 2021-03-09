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
  plugins: [
    [
      'vuepress-plugin-comment',
      {
        choosen: 'gitalk', 
        options: {
          clientID: 'f7a7d88100955b9620ef',
          clientSecret: '9277c5b00609c8aae5e2854e1a0957d304e41842',
          repo: 'Wiki', // GitHub 仓库
          owner: 'Muyun99', // GitHub仓库所有者
          admin: ['Muyun99'], // 对仓库有写权限的人
          distractionFreeMode: false 
        }
      }
    ]
  ],
  themeConfig,
}