export default {
  /** META */

  code: 'zh_hans', // Must be same as filename
  lang: '简体中文', // Fullname of language

  /** TRANSLATION */

  // Main title
  title: '假装升级',

  // Home page
  localeLabel: '语言',
  systemLabel: '系统',
  timerLabel: '计时器',
  buttonLabel: '开始升级',

  // Systems data
  systems: {
    'windows-10': {
      name: 'Windows 10',
      strings: {
        nowWorking: '正在配置更新',
        progressInfo: '已完成 {progress}%',
        doNotTurnOff: '请不要关闭你的计算机',
      },
    },
    'macos-catalina': {
      name: 'macOS Catalina',
      strings: {},
    },
  },
};
