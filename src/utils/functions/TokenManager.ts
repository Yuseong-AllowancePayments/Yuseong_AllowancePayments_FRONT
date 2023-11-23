import ElectronStore from "electron-store";

const store: ElectronStore<Record<string, unknown>> = new ElectronStore();

export const setToken = (accessToken: string) => {
  store.set("accessToken", accessToken);
};

export const removeToken = () => {
  store.delete("accessToken");
};

export const getToken = () => {
  const accessToken = store.get("accessToken");

  return accessToken;
};
