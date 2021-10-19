import { GameFigureTypes, PlayerResult } from "../types/RockPaperScissorsTypes";

export function getRockPaperScissorsWinner(
  userSelection: GameFigureTypes,
  houseSelecction: GameFigureTypes
) {
  let result: PlayerResult = "You Win";
  const win = "You Win";
  const draw = "Game Draw";
  const lose = "You Lose";

  switch (userSelection) {
    case "paper":
      if (houseSelecction === "paper") {
        result = draw;
      } else if (houseSelecction === "rock") {
        result = win;
      } else if (houseSelecction === "scissors") {
        result = lose;
      }

      break;
    case "rock":
      if (houseSelecction === "paper") {
        result = lose;
      } else if (houseSelecction === "rock") {
        result = draw;
      } else if (houseSelecction === "scissors") {
        result = win;
      }

      break;
    case "scissors":
      if (houseSelecction === "paper") {
        result = win;
      } else if (houseSelecction === "rock") {
        result = lose;
      } else if (houseSelecction === "scissors") {
        result = draw;
      }

      break;

    default:
      break;
  }

  return result;
}
