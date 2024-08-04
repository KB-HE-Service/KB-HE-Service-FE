import { useSocketStore } from "@/shared";

const URL = import.meta.env.VITE_DEC_SERVER_URL;

export const DecSocketService = () => {
  const setInferenceResult = useSocketStore(
    (state) => state.setInferenceResult
  );
  const clientId = useSocketStore((state) => state.clientId);

  return {};
};
