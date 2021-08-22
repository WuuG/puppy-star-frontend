const key = {
  TOKEN: "token",
  USER_INFO: "userInfo",
};

const setLocalStorage = (key, value) => {
  try {
    const JSONValue = JSON.stringify(value);
    window.localStorage.setItem(key, JSONValue);
    return true;
  } catch (error) {
    console.error(`set local storage error ${error}`);
    return false;
  }
};

const getLocalStorage = (key) => {
  let result = window.localStorage.getItem(key);
  if (result) {
    result = JSON.parse(result);
    return result;
  }
  return null;
};

export { key, setLocalStorage, getLocalStorage };
