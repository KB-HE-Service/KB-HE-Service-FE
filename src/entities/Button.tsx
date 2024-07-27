import styled from "@emotion/styled";

export const Button = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => <StyledButton onClick={onClick}>{children}</StyledButton>;

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 89%;
  height: 50px;

  color: white;
  font-size: 25px;
  border-radius: 10px;
  font-weight: bold;

  margin-top: 20px;

  border: 3px solid #f0a000;

  background-color: #eb9c00;
`;
