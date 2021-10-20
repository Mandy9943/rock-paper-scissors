import styled, { css } from "styled-components";

interface IGameFigureS {
  background?: string;
  borderColor?: string;
  isWinner?: boolean;
}

export const GameFigureWrapperS = styled.div`
  width: 200px;
  height: 200px;
  cursor: pointer;
  position: relative;

  @media (max-width: 500px) {
    width: 100px;
    height: 100px;
  }
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
  z-index: -1;

  ${(props) =>
    props.isWinner &&
    css`
      ::before,
      ::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        border: 40px solid rgb(82 103 147 / 38%);
        border-radius: 100%;
        animation: latido linear 8s infinite;
      }

      ::before {
        animation-delay: 4s;
      }
      @keyframes latido {
        0% {
          width: 100%;
          height: 100%;
          border: 30px solid rgb(82 103 147 / 38%);
        }
        50% {
          width: 150%;
          height: 150%;
          border: 55px solid rgb(82 103 147 / 18%);
        }
        100% {
          width: 200%;
          height: 200%;
          border: 70px solid transparent;
        }
      }
    `}
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
