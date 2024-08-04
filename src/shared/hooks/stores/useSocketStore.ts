import { create } from "zustand";

export const useSocketStore = create<Socket.Store>((set) => ({
  //State
  clientId: undefined, //메인 서버로 부터 할당 받은 자기의 식별자
  myEncData: undefined, //암호화 서버로부터 받은 자기의 암호화 이진 데이터
  someoneEncData: undefined, //복호화 서버로부터 받은 임의 암호화 이진 데이터
  inferenceResult: undefined,

  //Set Function
  setClientId: (id) => {
    set(() => ({ clientId: id }));
  },
  setMyEncData: (data) => {
    set(() => ({ myEncData: data }));
  },
  setSomeoneEncData: (data) => {
    set(() => ({ someoneEncData: data }));
  },
  setInferenceResult: (result) => {
    set(() => ({ inferenceResult: result }));
  },
}));
