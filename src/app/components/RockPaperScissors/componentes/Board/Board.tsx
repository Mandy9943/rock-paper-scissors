import React from "react";
import { config, useSpring } from "react-spring";
import { BoardS, ScoreNumberS, ScoreTitleS } from "./Board.style";

interface IProps {
  score: number;
}
const Board = ({ score }: IProps) => {
  const { count } = useSpring({
    to: { count: score },
    from: { count: 0 },
    delay: 200,
    config: config.molasses,
  });

  return (
    <BoardS>
      <ScoreTitleS>Score</ScoreTitleS>
      <ScoreNumberS>{count.to((n) => n.toFixed(0))}</ScoreNumberS>
    </BoardS>
  );
};

export default Board;
