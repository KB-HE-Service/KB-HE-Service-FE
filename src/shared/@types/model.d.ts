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
    name: string;
    explanation: string;
    query: Query[];
  }

  export interface Store {
    //State
    inferenceModels: Model[];
    trainingModels: Model[];

    //Set function
    setInferenceModels: (models: Model[]) => void;
    setTrainingModels: (models: Model[]) => void;
  }
}
