import { create } from "zustand";

import { getUserInfo } from "@/shared";

export const useDataStore = create<Socket.DataStore>((set, get) => ({
  //State
  clientId: undefined, //메인 서버로 부터 할당 받은 자기의 식별자
  encClientId: undefined, //암호화 서버로부터 받은 자기의 암호화 식별자
  originDatas: [], //유저가 입력한 개인 정보
  data: undefined, //암호화 서버로부터 받은 자기의 암호화 이진 데이터
  label: undefined, //암호화 서버로부터 받은 자기의 암호화 이진 데이터 (Training 시 라벨)
  token: undefined, //복호화 서버로부터 받은 임의 암호화 이진 데이터
  inferenceResult: undefined,

  //Set Function
  setClientId: (id) => {
    set(() => ({ clientId: id }));
  },
  setEncClientId: (id) => {
    set(() => ({ encClientId: id }));
  },
  resetOriginDatas: (model) => {
    const newOriginDatas: Model.Datas = [];
    model.query.map((query) => {
      newOriginDatas.push({ id: query.id, value: undefined });
    });

    const basicInfos = getUserInfo();

    if (basicInfos) {
      basicInfos.map((basicInfo) => {
        const index = newOriginDatas.findIndex(
          (originData) => originData.id === basicInfo.id
        );
        if (index !== -1) newOriginDatas[index].value = basicInfo.value;
      });
    }

    set(() => ({ originDatas: newOriginDatas }));
  },
  setOriginData: (id: string, value: string) => {
    set((state) => {
      const newOriginDatas = state.originDatas;
      const index = newOriginDatas.findIndex(
        (originData) => originData.id === id
      );

      if (index !== -1) newOriginDatas[index].value = value;

      return { originDatas: newOriginDatas };
    });
  },
  getOriginDatas: () => {
    let check = true;
    get().originDatas.map((originData) => {
      if (!originData.value) check = false;
    });

    if (check) return get().originDatas;
    return null;
  },
  setData: (data) => {
    set(() => ({ data: data }));
  },
  setLabel: (label) => {
    set(() => ({ label: label }));
  },
  setToken: (data) => {
    set(() => ({ token: data }));
  },
  setInferenceResult: (result) => {
    set(() => ({ inferenceResult: result }));
  },
}));
