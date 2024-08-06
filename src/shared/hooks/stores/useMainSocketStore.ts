import { create } from "zustand";

export const useMainSocketStore = create<
  Socket.SocketStore<string | ArrayBuffer>
>((set) => ({
  socket: undefined,
  messages: [],

  setSocket: (socket) => {
    set(() => ({
      socket: socket,
    }));
  },

  addMessage: (message) => {
    set((state) => ({ messages: [...state.messages, message] }));
  },
}));
