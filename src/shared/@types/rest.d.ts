declare namespace Rest {
  export interface TrainingReqDto {
    data: string;
    label: string;
  }

  export type TrainingEncResDto = TrainingReqDto;

  export interface InferenceEncResDto {
    id: string;
    data: string;
  }
}
