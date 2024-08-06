import { useDataStore } from "@/shared";

const URL = import.meta.env.VITE_MAIN_SERVER_URL;

export const MainSocketService = () => {
  const setClientId = useDataStore((state) => state.setClientId);

  const someoneEncData = useDataStore((state) => state.someoneEncData);
  const myEncData = useDataStore((state) => state.myEncData);

  return {};
};
