export const defaultPrivacy: Model.Query[] = [
  {
    id: "d-0",
    label: "성별",
    option: [
      { label: "남자", value: "0" },
      { label: "여성", value: "1" },
    ],
  },
  {
    id: "d-1",
    label: "소득 분위",
    option: [
      { label: "1분위", value: "1" },
      { label: "2분위", value: "2" },
      { label: "3분위", value: "3" },
      { label: "4분위", value: "4" },
      { label: "5분위", value: "5" },
      { label: "6분위", value: "6" },
      { label: "7분위", value: "7" },
      { label: "8분위", value: "8" },
      { label: "9분위", value: "9" },
      { label: "10분위", value: "10" },
    ],
  },
  {
    id: "d-2",
    label: "가족 구성원",
    option: [
      { label: "부부 (1세대)", value: "0" },
      { label: "부부+자녀 (2세대)", value: "1" },
      { label: "부부+부모 (2세대)", value: "2" },
      { label: "한부모+자녀 (2세대)", value: "3" },
      { label: "부부+부모+자녀 (3세대)", value: "4" },
      { label: "4세대 이상", value: "5" },
    ],
  },
  {
    id: "d-3",
    label: "한달 지출",
    option: [
      { label: "0~100만원", value: "0" },
      { label: "100~200만원", value: "1" },
      { label: "200~300만원", value: "2" },
      { label: "300~400만원", value: "3" },
      { label: "500~600만원", value: "4" },
      { label: "600만원 초과", value: "5" },
    ],
  },
];
