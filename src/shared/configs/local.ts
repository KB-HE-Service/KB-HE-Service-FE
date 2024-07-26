const storageKey = "USER_INFO";

export const storeUserInfo = (info: User.BasicUserInfo): void => {
  localStorage.setItem(storageKey, JSON.stringify(info));
};
export const removeUserInfo = (): void => {
  localStorage.removeItem(storageKey);
};
export const getUserInfo = (): User.BasicUserInfo | null => {
  const info = localStorage.getItem(storageKey);
  return info ? JSON.parse(info) : null;
};
