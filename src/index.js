import locales from './locales/home.js';

export default {
  locales,
  systems: {
    'windows-10': {
      name: 'Windows 10',
      locales: require('./locales/windows-10.json'),
    },
    'macos-catalina': {
      name: 'macOS Catalina',
      locales: require('./locales/macos-catalina.json'),
    },
  },
};
