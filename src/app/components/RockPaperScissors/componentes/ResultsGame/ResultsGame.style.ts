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
  padding: 40px;

  @media (max-width: 500px) {
    flex-direction: column-reverse;
    position: relative;
    padding: 10px;
  }
`;
export const TextSelectionS = styled.p`
  color: white;
  text-transform: uppercase;
  letter-spacing: 1.2px;

  margin-bottom: 30px;
  position: relative;
  z-index: 10;

  @media (max-width: 500px) {
    margin-top: 20px;
  }
`;
export const FigureS = styled(animated.div)`
  width: 250px;
  height: 250px;
  @media (max-width: 500px) {
    width: 100px;
    height: 100px;
  }
`;
export const ResultStatsS = styled(animated.div)`
  margin: 0 35px;
  z-index: 10;
  .text-result {
    color: white;
    text-transform: uppercase;
    font-size: 45px;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
  }

  @media (max-width: 500px) {
    position: absolute;
    bottom: -100px;
    left: 0;
    right: 0;
  }
`;
