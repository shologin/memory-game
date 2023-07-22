import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfMoves: 0,
};

const moveSlice = createSlice({
  name: "moves",
  initialState,
  reducers: {
    moveMade: (state) => {
      state.numOfMoves += 1;
    },
    moveSet: (state, actions) => {
      localStorage.setItem(actions.payload, state.numOfMoves);
      state.numOfMoves = 0;
    },
    moveClearCurrent: (state) => {
      state.numOfMoves = 0;
    },
  },
});

export default moveSlice.reducer;
export const { moveMade, moveSet, moveClearCurrent } = moveSlice.actions;
