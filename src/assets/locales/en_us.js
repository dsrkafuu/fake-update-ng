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
        nowWorking: 'Working on updates',
        progressInfo: '{progress}% compelete',
        doNotTurnOff: "Don't turn off your computer",
      },
    },
    'macos-catalina': {
      name: 'macOS Catalina',
      strings: {},
    },
  },
};
