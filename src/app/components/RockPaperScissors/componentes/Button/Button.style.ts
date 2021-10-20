import styled from "styled-components";
interface IButtonS {
  backgroundColor?: string;
  textColor?: string;
  hoverBackgroundColor?: string;
  hoverTextColor?: string;
}
export const ButtonS = styled.button<IButtonS>`
  width: 100%;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};

  outline: none;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  border-radius: 5px;
  border: 0.5px solid white;
  letter-spacing: 1.2px;

  text-transform: uppercase;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.hoverBackgroundColor};
    color: ${(props) => props.hoverTextColor};
  }
`;
