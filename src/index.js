import locales from './locales/home.js';

export default {
  locales,
  systems: {
    'windows-10': {
      name: 'Windows 10',
      locales: require('./locales/windows-10.json'),
    },
    macos: {
      name: 'macOS',
      locales: require('./locales/macos.json'),
    },
    ios: {
      name: 'iOS',
      locales: require('./locales/ios.json'),
    },
    'ios-white': {
      name: 'iOS (White)',
      locales: require('./locales/ios-white.json'),
    },
  },
};
