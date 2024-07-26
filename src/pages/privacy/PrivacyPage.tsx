import {
  Background,
  Title,
  SubTitle,
  MidContainer,
  Label,
  InputContainer,
} from "@/entities";

const PrivacyPage = () => (
  <>
    <Background color="#FCAF16" />
    <MidContainer>
      <Title>서비스를 이용하기 위한</Title>
      <Title>개인 정보를 입력해주세요!</Title>
      <div style={{ height: "15px" }}></div>
      <SubTitle>입력하신 정보는 사용 중이신 기기에만</SubTitle>
      <SubTitle>저장되니 안심하고 입력해도 됩니다.</SubTitle>
      <InputContainer>
        <Label>
          <span>필수</span>성별
        </Label>
        <Label>
          <span>필수</span>소득 분위
        </Label>
        <Label>
          <span>필수</span>거주 지역
        </Label>
      </InputContainer>
    </MidContainer>
  </>
);

export default PrivacyPage;
