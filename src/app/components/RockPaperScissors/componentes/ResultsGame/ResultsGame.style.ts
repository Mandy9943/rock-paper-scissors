import { animated } from "react-spring";
import styled from "styled-components";

export const ResultsGameWrapperS = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GameSelectionsS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
`;
export const TextSelectionS = styled.p`
  color: white;
  text-transform: uppercase;
  letter-spacing: 1.2px;

  margin-bottom: 30px;
`;
export const FigureS = styled(animated.div)`
  width: 170px;
  height: 170px;
`;
export const ResultStatsS = styled(animated.div)`
  width: fit-content;
  margin: 0 10px;
  .text-result {
    color: white;
    text-transform: uppercase;
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;
