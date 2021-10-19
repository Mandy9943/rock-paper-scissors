import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { GameFigureTypes } from "../../types/RockPaperScissorsTypes";

export interface RockPaperScissorsState {
  score: number;
  userSelection: GameFigureTypes | null;
  houseSelecction: GameFigureTypes | null;
}

const initialState: RockPaperScissorsState = {
  score: 0,
  userSelection: null,
  houseSelecction: null,
};

export const RockPaperScissorsSlice = createSlice({
  name: "RockPaperScissors",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    incrementScore: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.score += 1;
    },
    decrementScore: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (state.score !== 0) {
        state.score -= 1;
      }
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    setScore: (state, action: PayloadAction<number>) => {
      state.score = action.payload;
    },
    selectUserFigure: (
      state,
      action: PayloadAction<GameFigureTypes | null>
    ) => {
      state.userSelection = action.payload;
    },
    makeHouseSelection: (state) => {
      const posiblesSelections: GameFigureTypes[] = [
        "scissors",
        "rock",
        "paper",
      ];
      const randomSelection = Math.floor(Math.random() * 3);

      state.houseSelecction = posiblesSelections[randomSelection];
    },
  },
});

export const {
  incrementScore,
  decrementScore,
  setScore,
  selectUserFigure,
  makeHouseSelection,
} = RockPaperScissorsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.RockPaperScissors.value)`
export const selectScore = (state: RootState) => state.rockPaperScissors.score;
export const selectUserSelection = (state: RootState) =>
  state.rockPaperScissors.userSelection;
export const selecHouseSelection = (state: RootState) =>
  state.rockPaperScissors.houseSelecction;

export default RockPaperScissorsSlice.reducer;
