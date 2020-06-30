export default {
  set: function(key, value) {
    try {
      localStorage.setItem(key, value);
      return key;
    } catch (e) {
      console.error('Failed to set local storage');
      return undefined;
    }
  },
  get: function(key) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      console.error('Failed to get local storage');
      return undefined;
    }
  },
};
