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

  export interface Store {
    //State
    inferenceModels: Model[];
    trainingModels: Model[];

    //Set Function
    setInferenceModels: (models: Model[]) => void;
    setTrainingModels: (models: Model[]) => void;
  }
}
