import { animated } from "react-spring";
import styled from "styled-components";

export const ResultsGameWrapperS = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    position: relative;
  }
`;

export const GameSelectionsS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  @media (max-width: 500px) {
    flex-direction: column-reverse;
    position: relative;
  }
`;
export const TextSelectionS = styled.p`
  color: white;
  text-transform: uppercase;
  letter-spacing: 1.2px;

  margin-bottom: 30px;

  @media (max-width: 500px) {
    margin-top: 20px;
  }
`;
export const FigureS = styled(animated.div)`
  width: 130px;
  height: 130px;
  @media (max-width: 500px) {
    width: 100px;
    height: 100px;
  }
`;
export const ResultStatsS = styled(animated.div)`
  width: fit-content;
  margin: 0 20px;
  .text-result {
    color: white;
    text-transform: uppercase;
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  @media (max-width: 500px) {
    position: absolute;
    bottom: -50px;
  }
`;
