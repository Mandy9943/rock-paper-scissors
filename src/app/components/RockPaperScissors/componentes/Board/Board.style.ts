import { animated } from "react-spring";
import styled from "styled-components";

export const BoardS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 60px;
  padding: 30px 0;
  background-color: white;
  border-radius: 5px;

  flex-direction: column;
`;
export const ScoreTitleS = styled.h5`
  text-transform: uppercase;
  font-size: bold;
  color: var(--Score_Text);
  font-size: 8px;
  letter-spacing: 1px;
  font-weight: bold;
`;
export const ScoreNumberS = styled(animated.span)`
  font-size: 30px;
  font-weight: bold;
  color: var(--Dark_Text);
`;
