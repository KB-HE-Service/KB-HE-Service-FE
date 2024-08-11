import { mainAPI } from "@/shared/configs/axios";

import { useDataStore, useModelsStore } from "@/shared";
import { AxiosResponse } from "axios";

export const MainRestService = () => {
  const encClientId = useDataStore((state) => state.encClientId);
  const label = useDataStore((state) => state.label);

  const setInferenceModels = useModelsStore(
    (state) => state.setInferenceModels
  );
  const setTrainingModels = useModelsStore((state) => state.setTrainingModels);

  const getModels = async () => {
    const {
      data: { inferenceModels, trainingModels },
    } = (await mainAPI.get(
      "/combined-models"
    )) as AxiosResponse<Model.getModelsResDto>;

    setInferenceModels(inferenceModels);
    setTrainingModels(trainingModels);
  };

  const postTraining = async () => {
    (await mainAPI.post("/training/{id}", {
      id: encClientId,
      label: label,
    })) as AxiosResponse;
  };

  return { getModels, postTraining };
};
