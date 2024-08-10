import { useDataStore, useMainSocketStore } from "@/shared";

const URL = import.meta.env.VITE_MAIN_SERVER_URL;

export const MainSocketService = () => {
  const encClientId = useDataStore((state) => state.encClientId);

  const setSocket = useMainSocketStore((state) => state.setSocket);
  const socket = useMainSocketStore((state) => state.socket);
  const addMessage = useMainSocketStore((state) => state.addMessage);

  const data = useDataStore((state) => state.data);

  const onOpen = (id: string) => {
    onClose();

    //create socket
    const newSocket = new WebSocket(`${URL}:ws/${id}`);

    //setting socket
    newSocket.onclose = (error) => {
      console.log(error);
    };
    newSocket.onerror = (error) => {
      console.log(error);
    };

    newSocket.onmessage = (event: MessageEvent<string>) => {
      addMessage(JSON.parse(event.data));
    };

    //send id message
    if (newSocket.readyState === WebSocket.OPEN && encClientId) {
      newSocket.send(
        JSON.stringify({
          mode: "ID",
          id: encClientId,
        })
      );
    } else {
      console.log("There is something wrong with dec server socket");
      return;
    }

    setSocket(newSocket);
  };

  const onClose = () => {
    socket?.close();
  };

  const sendMessage = (data: Socket.MainServerMessageDto) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify(data));
    } else console.log("There is something wrong with dec server socket");
  };

  const sendInference = () => {
    if (encClientId && data)
      sendMessage({
        mode: "INFERENCE",
        id: encClientId,
        data: data,
      });
  };

  return { onOpen, onClose, sendMessage, sendInference };
};
