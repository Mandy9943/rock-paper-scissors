import React, { useEffect, useState } from "react";
import { config, useSpring } from "react-spring";
import {
  decrementScore,
  incrementScore,
  makeHouseSelection,
  selecHouseSelection,
  selectUserFigure,
  selectUserSelection,
} from "../../../../../features/RockPaperScissors/RockPaperScissorsSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../hooks/reduxhooks";
import { getRockPaperScissorsWinner } from "../../../../../lib/getRockPaperScissorsWinner";
import { PlayerResult } from "../../../../../types/RockPaperScissorsTypes";
import Button from "../Button/Button";
import GameFigure from "../GameFigure/GameFigure";
import {
  GameSelectionsS,
  ResultsGameWrapperS,
  TextSelectionS,
  FigureS,
  ResultStatsS,
} from "./ResultsGame.style";

const ResultsGame = () => {
  const userSelection = useAppSelector(selectUserSelection);
  const houseSelection = useAppSelector(selecHouseSelection);
  const dispatch = useAppDispatch();

  const [showWinner, setShowWinner] = useState(false);
  const [result, setresult] = useState<PlayerResult>("You Win");

  useEffect(() => {
    dispatch(makeHouseSelection());
  }, [dispatch]);

  useEffect(() => {
    if (userSelection && houseSelection && showWinner) {
      const result = getRockPaperScissorsWinner(userSelection, houseSelection);
      if (result === "You Win") {
        dispatch(incrementScore());
      } else if (result === "You Lose") {
        dispatch(decrementScore());
      }
      setresult(result);
    }
  }, [houseSelection, userSelection, dispatch, showWinner]);

  const handlePlayAgain = () => {
    dispatch(selectUserFigure(null));
  };

  const callShoeWinner = () => {
    setTimeout(function () {
      setShowWinner(true);
    }, 100);
  };

  const animationHouseFigure = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    onResolve: callShoeWinner,
    // onPause: callShoeWinner,
    config: config.default,
  });
  const animationResultBox = useSpring({
    to: { opacity: 1, y: 0 },
    from: { opacity: 0, y: 110 },
    delay: 1000,

    config: config.molasses,
  });

  return (
    <ResultsGameWrapperS>
      <GameSelectionsS>
        <TextSelectionS>You Picked</TextSelectionS>
        {userSelection && (
          <FigureS>
            <GameFigure size="100%" type={userSelection} />
          </FigureS>
        )}
      </GameSelectionsS>
      {showWinner && (
        <ResultStatsS style={animationResultBox}>
          <div className="text-result">{result}</div>

          <Button theme="secondary" onClick={handlePlayAgain}>
            Play Again{" "}
          </Button>
        </ResultStatsS>
      )}
      <GameSelectionsS>
        <TextSelectionS>The house Picked</TextSelectionS>
        {houseSelection && (
          <FigureS style={animationHouseFigure}>
            <GameFigure size="100%" type={houseSelection} />
          </FigureS>
        )}
      </GameSelectionsS>
    </ResultsGameWrapperS>
  );
};

export default ResultsGame;
