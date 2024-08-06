import { useDataStore, useMainSocketStore } from "@/shared";

const URL = import.meta.env.VITE_MAIN_SERVER_URL;

export const MainSocketService = () => {
  /* const setClientId = useDataStore((state) => state.setClientId);

  const someoneEncData = useDataStore((state) => state.someoneEncData);
  const myEncData = useDataStore((state) => state.myEncData); */

  const clientId = useDataStore((state) => state.clientId);

  const setSocket = useMainSocketStore((state) => state.setSocket);
  const socket = useMainSocketStore((state) => state.socket);
  const addMessage = useMainSocketStore((state) => state.addMessage);

  const onOpen = () => {
    //create socket
    const newSocket = new WebSocket(URL);

    //setting socket
    newSocket.onclose = (error) => {
      console.log(error);
    };
    newSocket.onerror = (error) => {
      console.log(error);
    };
    newSocket.onmessage = (event: MessageEvent<ArrayBuffer>) => {
      addMessage(event.data);
    };

    //send id message
    if (newSocket.readyState === WebSocket.OPEN && clientId) {
      newSocket.send(clientId);
    } else {
      console.log("There is something wrong with dec server socket");
      return;
    }

    setSocket(newSocket);
  };

  const onClose = () => {
    socket?.close();
  };

  const sendMessage = (data: ArrayBuffer) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(data);
    } else console.log("There is something wrong with dec server socket");
  };

  return { onOpen, onClose, sendMessage };
};
