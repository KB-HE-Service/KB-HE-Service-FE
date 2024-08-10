import { useParams } from "react-router";
import { useState } from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

import { HomeContainer, SelectInput, InferenceResultModal } from "@/widget";
import { encryptWithPublicKey } from "@/utils";

import {
  Title,
  SubTitle,
  Label,
  MidContainer,
  SmallInputContainer,
  Button,
  MidPointLine,
} from "@/entities";

const AdditionalPrivacyPage = () => {
  const { id } = useParams();

  const [currentStep, setCurrentStep] = useState(0);
  const [result, onResult] = useState(false);

  const condition = true;

  (async () => {
    const plainText = "Hello, world!";
    try {
      const encryptedText = await encryptWithPublicKey(plainText);
      console.log("Encrypted Text:", encryptedText);
    } catch (error) {
      console.error("Error during encryption:", error);
    }
  })();

  return (
    <>
      {result ? (
        <InferenceResultModal
          onClose={() => {
            onResult(false);
          }}
          result={"어쩌고저쩌고"}
        />
      ) : null}
      <HomeContainer>
        <MidContainer>
          <Title>
            {condition ? "AI 서비스를 이용하기" : "AI 개발에 기여하기"} 위한
          </Title>
          <Title>정보를 추가로 입력해주세요!</Title>
          <div style={{ height: "5px" }}></div>
          <SubTitle>입력하신 정보는 모두 안전하게</SubTitle>
          <SubTitle>암호화되어 처리되니 안심하고 입력해도 됩니다.</SubTitle>
          <SmallInputContainer>
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
          </SmallInputContainer>
          {condition ? null : (
            <>
              <MidPointLine />
              <div style={{ height: "10px" }}></div>
              <Label>{"Label"}을(를) 어느 정도로 선호하시나요?</Label>

              <div style={{ height: "20px" }}></div>
              <ProgressBar
                percent={currentStep * 25}
                width={320}
                filledBackground="linear-gradient(to right, #f0a00088, #f0a000)"
              >
                {Array.from({ length: 5 }).map((_, index) => (
                  <Step key={index}>
                    {({ accomplished }) => (
                      <div
                        style={{
                          width: 22,
                          height: 22,
                          borderRadius: "50%",
                          backgroundColor: accomplished
                            ? "#f0a000"
                            : "lightgray",
                        }}
                        onClick={() => setCurrentStep(index)}
                      />
                    )}
                  </Step>
                ))}
              </ProgressBar>
              <div style={{ height: "15px" }}></div>
              <SubTitle>
                선호하지 않아요 <span style={{ marginRight: "160px" }} />{" "}
                선호해요
              </SubTitle>
              <div style={{ height: "10px" }}></div>
            </>
          )}
          <Button
            onClick={() => {
              condition && onResult(true);
            }}
          >
            {condition ? "AI 결과 확인하기!" : "AI 개발에 기여하기!"}
          </Button>
        </MidContainer>
      </HomeContainer>
    </>
  );
};

export default AdditionalPrivacyPage;
