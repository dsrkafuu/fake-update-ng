export default {
  /** META */

  code: 'en_us', // Must be same as filename
  lang: 'English (United States)', // Fullname of language

  /** TRANSLATION */

  // Main title
  title: 'Fake Update',

  // Home page
  localeLabel: 'Locale',
  systemLabel: 'System',
  timerLabel: 'Timer',
  buttonLabel: 'Start update',

  // Systems data
  systems: {
    'windows-10': {
      name: 'Windows 10',
      strings: {
        nowWorking: '正在配置更新',
        progress: '已完成',
        doNotTurnOff: '请不要关闭你的计算机',
      },
    },
    'macos-catalina': {
      name: 'macOS Catalina',
      strings: {},
    },
  },
};
