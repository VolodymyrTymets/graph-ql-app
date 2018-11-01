const getAuthToken = () => window.localStorage.getItem('token');
const setAuthToken = token => window.localStorage.setItem('token', token);

export {
  setAuthToken,
  getAuthToken,
};
