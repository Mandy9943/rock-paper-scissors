import React from "react";
import { LogoS, ScoreWrapperS } from "./Score.style";
import logo from "../../../../../assets/images/logo.svg";
import Board from "../Board/Board";
import { selectScore } from "../../../../../features/RockPaperScissors/RockPaperScissorsSlice";
import { useAppSelector } from "../../../../../hooks/reduxhooks";
const Score = () => {
  const score = useAppSelector(selectScore);
  return (
    <ScoreWrapperS>
      <LogoS>
        <img src={logo} alt="Logo of Rock, Paper and Scissors" />
      </LogoS>
      <Board score={score} />
    </ScoreWrapperS>
  );
};

export default Score;
