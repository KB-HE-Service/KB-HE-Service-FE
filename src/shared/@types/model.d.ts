declare namespace Model {
  export type Option = {
    label: string;
    value: string;
  }[];

  export interface Query {
    id: string;
    label: string;
    option: Option;
  }

  export interface Model {
    id: string;
    name: string;
    explanation: string;
    query: Query[];
  }

  export type Datas = { id: string; value: string }[];
  export type DefaultDatas = [
    { id: "d-0"; value: string },
    { id: "d-1"; value: string },
    { id: "d-2"; value: string },
    { id: "d-3"; value: string }
  ];

  export interface Store {
    //State
    inferenceModels: Model[];
    trainingModels: Model[];

    //Set Function
    setInferenceModels: (models: Model[]) => void;
    setTrainingModels: (models: Model[]) => void;
  }
}
