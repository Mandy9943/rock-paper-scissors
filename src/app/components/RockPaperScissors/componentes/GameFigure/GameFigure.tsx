import React from "react";
import {
  FigureContentS,
  FigureS,
  GameFigureS,
  GameFigureWrapperS,
} from "./GameFigure.style";

import scissorsIcon from "../../../../../assets/images/icon-scissors.svg";
import rockIcon from "../../../../../assets/images/icon-rock.svg";
import paperIcon from "../../../../../assets/images/icon-paper.svg";
import { GameFigureTypes } from "../../../../../types/RockPaperScissorsTypes";

interface IProps {
  type?: GameFigureTypes;
  size?: string;
  onClick?: (type: GameFigureTypes) => void;
}

const GameFigure = ({ type = "scissors", size = "100px", onClick }: IProps) => {
  let styleFigure = {
    background: "linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))",
    borderColor: "#b37c05",
    image: scissorsIcon,
  };
  switch (type) {
    case "scissors":
      styleFigure = {
        ...styleFigure,
        background: "linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))",
        borderColor: "#b37c05",
        image: scissorsIcon,
      };
      break;
    case "rock":
      styleFigure = {
        ...styleFigure,
        background: "linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
        borderColor: "#802421",
        image: rockIcon,
      };
      break;
    case "paper":
      styleFigure = {
        ...styleFigure,
        background: "linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
        borderColor: "#1929be",
        image: paperIcon,
      };
      break;

    default:
      break;
  }
  return (
    <GameFigureWrapperS
      style={{ width: size, height: size }}
      onClick={() =>
        onClick
          ? onClick(type)
          : () => {
              return;
            }
      }
    >
      <GameFigureS
        background={styleFigure.background}
        borderColor={styleFigure.borderColor}
      >
        <FigureContentS>
          <FigureS>
            <img src={styleFigure.image} alt="Game figure" />
          </FigureS>
        </FigureContentS>
      </GameFigureS>
    </GameFigureWrapperS>
  );
};

export default GameFigure;
