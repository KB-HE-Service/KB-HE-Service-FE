import { create } from "zustand";

export const useAuthStore = create<Auth.Store>((set) => ({
  //State
  clientPublicKey: "",
  encryptionServerPublicKey: "",
  mainServerPublicKey: "",
  clientPrivateKey: "",

  //Set function
  setClientPrivateKey: (key) => {
    set(() => ({ clientPrivateKey: key }));
  },
  setPublicKey: (keys) => {
    set(() => ({ ...keys }));
  },
}));
