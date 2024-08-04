import { useSocketStore } from "@/shared";

const URL = import.meta.env.VITE_MAIN_SERVER_URL;

export const MainSocketService = () => {
  const setClientId = useSocketStore((state) => state.setClientId);

  const someoneEncData = useSocketStore((state) => state.someoneEncData);
  const myEncData = useSocketStore((state) => state.myEncData);

  return {};
};
