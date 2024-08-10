declare namespace Socket {
  //DTO
  export interface IdSendDto {
    mode: "ID";
    id: string;
  }

  export interface InferenceSendDto {
    mode: "INFERENCE";
    id: string;
    data: string;
  }

  export interface TokenDto {
    mode: "TOKEN";
    token: string;
  }

  export interface InferenceReceiveDto {
    mode: "RESULT";
    result: string;
  }

  export interface TrainingReqDto {
    data: string;
    ladel: string;
  }

  export type MainServerMessageDto =
    | Socket.IdSendDto
    | Socket.InferenceSendDto
    | Socket.TokenDto;

  export type DecServerMessageDto =
    | Socket.IdSendDto
    | Socket.InferenceReceiveDto
    | Socket.TokenDto;

  //Store
  export interface DataStore {
    //State
    clientId: string | undefined; //메인 서버로 부터 할당 받은 자기의 식별자
    myEncData: string | undefined; //암호화 서버로부터 받은 자기의 암호화 이진 데이터
    someoneEncData: string | undefined; //복호화 서버로부터 받은 임의 암호화 이진 데이터
    inferenceResult: string | undefined; //AI 추론 결과 값

    //Set Function
    setClientId: (id: string) => void;
    setMyEncData: (data: string) => void;
    setSomeoneEncData: (data: string) => void;
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
