import React from "react";
import GameFigure from "../GameFigure/GameFigure";
import {
  ContentS,
  PlayGroundWrapperS,
  TriangleContent,
} from "./PlayGround.style";

import triangle from "../../../../../assets/images/bg-triangle.svg";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../hooks/reduxhooks";
import {
  selectUserFigure,
  selectUserSelection,
} from "../../../../../features/RockPaperScissors/RockPaperScissorsSlice";
import { GameFigureTypes } from "../../../../../types/RockPaperScissorsTypes";
import ResultsGame from "../ResultsGame/ResultsGame";

const PlayGround = () => {
  const userSelection = useAppSelector(selectUserSelection);
  const dispatch = useAppDispatch();

  const handleSelectUserFigure = (type: GameFigureTypes) => {
    dispatch(selectUserFigure(type));
  };
  return (
    <PlayGroundWrapperS>
      {!userSelection ? (
        <ContentS>
          <img src={triangle} alt="triangle" />
          <TriangleContent top="-25%" left="-25%">
            <GameFigure type="paper" onClick={handleSelectUserFigure} />
          </TriangleContent>
          <TriangleContent top="-25%" right="-25%">
            <GameFigure type="scissors" onClick={handleSelectUserFigure} />
          </TriangleContent>
          <TriangleContent left="25%" bottom="-25%">
            <GameFigure type="rock" onClick={handleSelectUserFigure} />
          </TriangleContent>
        </ContentS>
      ) : (
        <ResultsGame />
      )}
    </PlayGroundWrapperS>
  );
};

export default PlayGround;
