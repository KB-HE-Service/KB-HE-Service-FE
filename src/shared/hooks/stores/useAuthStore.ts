import { create } from "zustand";

export const useAuthStore = create<Auth.Store>((set) => ({
  //State
  clientPublicKey: "",
  clientPrivateKey: "",

  //Set function
  setClientKeys: (keys) => {
    set(() => ({ ...keys }));
  },
}));
