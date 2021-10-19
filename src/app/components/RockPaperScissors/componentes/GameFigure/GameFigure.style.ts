import styled from "styled-components";

interface IGameFigureS {
  background?: string;
  borderColor?: string;
}

export const GameFigureWrapperS = styled.div`
  width: 100px;
  height: 100px;
  cursor: pointer;
`;
export const GameFigureS = styled.div<IGameFigureS>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: ${(props) =>
    props.background
      ? props.background
      : "linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))"};

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: ${(props) =>
    props.borderColor
      ? `0px 5px 0px ${props.borderColor}`
      : " 0px 5px 0px #b37c05"};
`;
export const FigureContentS = styled.div`
  width: 80%;
  height: 80%;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0px 4px 0px #dddcd9;
`;
export const FigureS = styled.span`
  width: 45%;
`;
