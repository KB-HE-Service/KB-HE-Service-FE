import {
  Background,
  Title,
  SubTitle,
  MidContainer,
  InputContainer,
  BottomLogo,
} from "@/entities";

import { SelectInput } from "@/widget";

const PrivacyPage = () => (
  <>
    <Background color="#FCAF16" />
    <MidContainer>
      <Title>서비스를 이용하기 위한</Title>
      <Title>개인 정보를 입력해주세요!</Title>
      <div style={{ height: "5px" }}></div>
      <SubTitle>입력하신 정보는 사용 중이신 기기에만</SubTitle>
      <SubTitle>저장되니 안심하고 입력해도 됩니다.</SubTitle>
      <InputContainer>
        <SelectInput
          required
          label="성별"
          option={[
            { label: "남자", value: "0" },
            { label: "여성", value: "1" },
          ]}
          onChange={() => {}}
        ></SelectInput>
        <SelectInput
          required
          label="소득 분위"
          option={[
            { label: "남자", value: "0" },
            { label: "여성", value: "1" },
          ]}
          onChange={() => {}}
        ></SelectInput>
        <SelectInput
          required
          label="가족 구성원"
          option={[
            { label: "남자", value: "0" },
            { label: "여성", value: "1" },
          ]}
          onChange={() => {}}
        ></SelectInput>
        <SelectInput
          required
          label="한 달 지출"
          option={[
            { label: "남자", value: "0" },
            { label: "여성", value: "1" },
            { label: "남자", value: "0" },
            { label: "여성", value: "1" },
            { label: "남자", value: "0" },
            { label: "여성", value: "1" },
            { label: "남자", value: "0" },
            { label: "여성", value: "1" },
            { label: "남자", value: "0" },
            { label: "여성", value: "1" },
          ]}
          onChange={() => {}}
        ></SelectInput>
      </InputContainer>
    </MidContainer>
    <BottomLogo />
  </>
);

export default PrivacyPage;
