declare namespace Socket {
  export interface DataStore {
    //State
    clientId: string | undefined; //메인 서버로 부터 할당 받은 자기의 식별자
    myEncData: ArrayBuffer | undefined; //암호화 서버로부터 받은 자기의 암호화 이진 데이터
    someoneEncData: ArrayBuffer | undefined; //복호화 서버로부터 받은 임의 암호화 이진 데이터
    inferenceResult: string | undefined; //AI 추론 결과 값

    //Set Function
    setClientId: (id: string) => void;
    setMyEncData: (data: ArrayBuffer) => void;
    setSomeoneEncData: (data: ArrayBuffer) => void;
    setInferenceResult: (result: string) => void;
  }

  export interface MainSocketStore {
    //State
    clientId: string | undefined; //메인 서버로 부터 할당 받은 자기의 식별자
    myEncData: ArrayBuffer | undefined; //암호화 서버로부터 받은 자기의 암호화 이진 데이터
    someoneEncData: ArrayBuffer | undefined; //복호화 서버로부터 받은 임의 암호화 이진 데이터
    inferenceResult: string | undefined; //AI 추론 결과 값

    //Set Function
    setClientId: (id: string) => void;
    setMyEncData: (data: ArrayBuffer) => void;
    setSomeoneEncData: (data: ArrayBuffer) => void;
    setInferenceResult: (result: string) => void;
  }

  export interface SocketStore<M> {
    //State
    socket: WebSocket | undefined;
    messages: M[];

    //Set Function
    setSocket: (socket: WebSocket) => void;
    addMessage: (message: M) => void;
  }
}
