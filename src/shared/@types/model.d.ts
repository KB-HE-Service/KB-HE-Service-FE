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

  export interface TrainingModel extends Model {
    label: string;
    trainingsGoal: number;
    trainingStatus: number;
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
    trainingModels: TrainingModel[];

    //Set Function
    setInferenceModels: (models: Model[]) => void;
    setTrainingModels: (models: TrainingModel[]) => void;
  }
}
