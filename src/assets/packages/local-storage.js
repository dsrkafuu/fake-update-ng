export default {
  set: function(key, value) {
    try {
      localStorage.setItem(key, value);
      return key;
    } catch (e) {
      console.warn('Failed to set local storage, page may not work properly');
      return undefined;
    }
  },
  get: function(key) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      console.warn('Failed to get local storage, page may not work properly');
      return undefined;
    }
  },
};
