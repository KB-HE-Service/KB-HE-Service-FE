import {
  Title,
  SubTitle,
  MidContainer,
  InputContainer,
  Button,
} from "@/entities";

import { useParams } from "react-router";

import { HomeContainer, SelectInput } from "@/widget";

const AdditionalPrivacyPage = () => {
  const { id } = useParams();

  console.log(id);

  return (
    <HomeContainer>
      <MidContainer>
        <Title>AI 서비스를 이용하기 위한</Title>
        <Title>정보를 추가로 입력해주세요!</Title>
        <div style={{ height: "5px" }}></div>
        <SubTitle>입력하신 정보는 모두 안전하게</SubTitle>
        <SubTitle>암호화되어 처리되니 안심하고 입력해도 됩니다.</SubTitle>
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
        <Button onClick={() => {}}>AI 결과 확인하기!</Button>
      </MidContainer>
    </HomeContainer>
  );
};

export default AdditionalPrivacyPage;
