import { AxiosResponse } from "axios";
import { encAPI } from "@/shared/configs/axios";

import { useDataStore } from "../stores/useDataStore";

//import { encryptWithPublicKey } from "@/utils";

export const EncRestService = () => {
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
        data: { datas, labels },
      } = (await encAPI.post(
        "/encryption",
        body
      )) as AxiosResponse<Rest.TrainingEncResDto>;

      setData(datas);
      setLabel(labels);
    }
  };

  const postInferenceEnc = async () => {
    const originDatas = getOriginDatas();

    if (originDatas) {
      const body = originDatas;
      body.unshift({ id: "ID", value: clientId });

      const {
        data: { datas, ids },
      } = (await encAPI.post("/{id}", {
        data: body,
      })) as AxiosResponse<Rest.InferenceEncResDto>;

      setData(datas);
      setEncClientId(ids);
    }
  };

  return { postTrainingEnc, postInferenceEnc };
};
