import styled from "@emotion/styled";
import Select, { StylesConfig } from "react-select";

import { Label } from "@/entities";

const customStyles: StylesConfig<{ label: string; value: string }, false> = {
  control: (provided) => ({
    ...provided,

    width: "160px",

    textAlign: "center",
    color: "#776c61",
    fontSize: "17px",
    fontWeight: "bold",

    border: "2px solid #776c61",
    borderRadius: "5px",
    backgroundColor: "#fff",
    appearance: "none",
    boxShadow: "none",
    cursor: "pointer",

    "&:hover": {
      borderColor: "#776c61",
    },
    "&:focus": {
      borderColor: "#776c61",
      outline: "none",
    },
  }),

  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "#fff" : "#776c61",
    backgroundColor: state.isSelected ? "#776c61" : "#fff",
    "&:hover": {
      backgroundColor: "#f2f2f2",
    },
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "5px",
    overflow: "hidden",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#776c61",
  }),
};

export const SelectInput = ({
  required,
  label,
  option,
  onChange,
}: {
  required?: boolean;
  label: string;
  option: Model.Option;
  onChange: () => void;
}) => (
  <Container>
    <Label>
      {required ? <span>필수</span> : null}
      {label}
    </Label>
    <Select
      options={option}
      styles={customStyles}
      placeholder="클릭하여 선택"
      components={{
        IndicatorSeparator: () => null,
      }}
    />
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 95%;

  margin-top: 10px;
  margin-bottom: 10px;
`;
