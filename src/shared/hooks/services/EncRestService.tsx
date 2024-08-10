import { AxiosResponse } from "axios";
import { encAPI } from "@/shared/configs/axios";

import { useDataStore } from "../stores/useDataStore";

export const MainRestService = () => {
  const getOriginDatas = useDataStore((state) => state.getOriginDatas);
  const clientId = useDataStore((state) => state.clientId);

  const setData = useDataStore((state) => state.setData);
  const setLabel = useDataStore((state) => state.setLabel);

  const setEncClientId = useDataStore((state) => state.setEncClientId);

  const postTrainingEnc = async () => {
    const originDatas = getOriginDatas();

    if (originDatas) {
      const body = originDatas;
      body.unshift({ id: "ID", value: clientId });

      const {
        data: { data, label },
      } = (await encAPI.post("/{id}", {
        data: body,
      })) as AxiosResponse<Rest.TrainingEncResDto>;

      setData(data);
      setLabel(label);
    }
  };

  const postInferenceEnc = async () => {
    const originDatas = getOriginDatas();

    if (originDatas) {
      const body = originDatas;
      body.unshift({ id: "ID", value: clientId });

      const {
        data: { data, id },
      } = (await encAPI.post("/{id}", {
        data: body,
      })) as AxiosResponse<Rest.InferenceEncResDto>;

      setData(data);
      setEncClientId(id);
    }
  };

  return { postTrainingEnc, postInferenceEnc };
};
