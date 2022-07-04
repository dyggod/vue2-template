const store = localStorage;

const localTokenName = 'VUE_TEMP_TOKEN';

export function getToken() {
  return store.getItem(localTokenName);
}

export function setToken(token) {
  store.setItem(localTokenName, token);
}

export function removeToken() {
  store.removeItem(localTokenName);
}
