import { mainAPI } from "@/shared/configs/axios";

import { useDataStore } from "../stores/useDataStore";

export const MainRestService = () => {
  const encClientId = useDataStore((state) => state.encClientId);
  const label = useDataStore((state) => state.label);

  const postTraining = async () => {
    await mainAPI.post("/{id}", { id: encClientId, label: label });
  };

  return { postTraining };
};
