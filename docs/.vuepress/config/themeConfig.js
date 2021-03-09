const nav = require('./themeConfig/nav.js');
const sidebar = require('./themeConfig/sidebar.js');
const htmlModules = require('./themeConfig/htmlModules.js');

// 主题配置
module.exports = {
  nav,
  sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
  logo: '/img/EB-logo.png', // 导航栏logo
  repo: 'xugaoyi/vuepress-theme-vdoing', // 导航栏右侧生成Github链接
  searchMaxSuggestions: 10, // 搜索结果显示最大数
  lastUpdated: '上次更新', 
  docsDir: 'docs', 
  editLinks: false, 
  editLinkText: '编辑',

  sidebar: 'structuring', 

  author: {
    name: 'Muyun99', 
    link: 'https://github.com/Muyun99', 
  },
  blogger: {
    avatar: 'https://muyun-blog-pic.oss-cn-shanghai.aliyuncs.com/tutou.jpg',
    name: 'Muyun99',
    slogan: '努力成为一个善良的人',
  },
  social: {
    iconfontCssFile: '//at.alicdn.com/t/font_2409154_6mouiwabqg.css',
    icons: [
      {
        iconClass: 'icon-mail',
        title: '发邮件',
        link: 'mailto:yundoo99@gmail.com',
      },
      {
        iconClass: 'icon-github',
        title: 'GitHub',
        link: 'https://github.com/muyun99',
      },
      {
        iconClass: 'icon-Blog',
        title: '博客',
        link: 'https://muyun.work',
      },
      {
        iconClass: 'icon-icon-test',
        title: '听音乐',
        link: 'https://music.163.com/#/playlist?id=713385758',
      },
    ],
  },
  footer: {
    createYear: 2021, 
    copyrightInfo:
      'Muyun99 | <a href="https://github.com/Muyun99/Wiki/blob/main/LICENSE" target="_blank">MIT License</a>',
  },
  htmlModules 
}
