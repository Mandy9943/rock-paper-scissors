import { animated } from "react-spring";
import styled from "styled-components";

export const BoardS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 80px;
  padding: 30px 0;
  background-color: white;
  border-radius: 5px;

  flex-direction: column;
`;
export const ScoreTitleS = styled.h5`
  text-transform: uppercase;
  color: var(--Score_Text);
  letter-spacing: 1px;
  font-weight: bold;
`;
export const ScoreNumberS = styled(animated.span)`
  font-size: 45px;
  font-weight: bold;
  color: var(--Dark_Text);
`;
