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
  // Variables de estado redux con la seleccion de la casa y la del usurio
  const userSelection = useAppSelector(selectUserSelection);
  const houseSelection = useAppSelector(selecHouseSelection);
  //Dispatch para dispatch actions
  const dispatch = useAppDispatch();

  // Muestra el cartel final de si se gano o se perdio o se empato
  const [showWinner, setShowWinner] = useState(false);
  // Muestra el cartel final de si se gano o se perdio o se empato
  const [wawes, setwawes] = useState(false);
  // Texto que muestra el resultado final
  const [result, setresult] = useState<PlayerResult>("You Win");

  //Cuando cargue el componente hacer que la casa seleccione una opcion
  useEffect(() => {
    dispatch(makeHouseSelection());
  }, [dispatch]);

  // Cuando el se pueda mostrar el cartel con showWinner determinar el resultado final mediante la funcion getRockPaperScissorsWinner
  //En caso de que se haya ganado icrementa en 1 la putuacion de lo contrario decrementa en 1
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

  /* Funcion que te resete la opcion del usurio obligando a que el usrio tenga que volver a elegir */
  const handlePlayAgain = () => {
    dispatch(selectUserFigure(null));
  };

  // Cuando se ejecuta esta funcion se espera un tiempo para mostrar el cartel del ganador
  const callShoeWinner = () => {
    setTimeout(function () {
      setShowWinner(true);
    }, 100);
  };

  // Cuando se ejecuta esta funcion se espera un tiempo para mostrar el cartel del ganador
  const handleShowWawes = () => {
    if (wawes === false) {
      console.log(wawes, "holaa");
      setwawes(true);
    }
  };

  // Animacion de la seleccion de la casa, cuando termine la animacion llama callShoeWinner para mostrar el cartel del ganador
  const animationHouseFigure = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    onResolve: callShoeWinner,
    config: config.default,
  });

  // Animacion del cartel del ganador que tiene una duracion de 1s
  const animationResultBox = useSpring({
    to: { opacity: 1, y: 0 },
    from: { opacity: 0, y: 110 },
    delay: 1000,
    onResolve: handleShowWawes,

    config: config.molasses,
  });

  return (
    <ResultsGameWrapperS>
      <GameSelectionsS>
        <TextSelectionS>You Picked</TextSelectionS>
        {userSelection && (
          <FigureS>
            <GameFigure
              size="100%"
              type={userSelection}
              isWinner={result === "You Win" && showWinner && wawes}
            />
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
            <GameFigure
              size="100%"
              type={houseSelection}
              isWinner={result === "You Lose" && showWinner && wawes}
            />
          </FigureS>
        )}
      </GameSelectionsS>
    </ResultsGameWrapperS>
  );
};

export default ResultsGame;
