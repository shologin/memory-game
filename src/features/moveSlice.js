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
      const hightRecord = localStorage.getItem(actions.payload);
      console.log(hightRecord, actions.payload);
      if (!hightRecord || state.numOfMoves < hightRecord) {
        localStorage.setItem(actions.payload, state.numOfMoves);
      } else null;
    },
    moveClearCurrent: (state) => {
      state.numOfMoves = 0;
    },
  },
});

export default moveSlice.reducer;
export const { moveMade, moveSet, moveClearCurrent } = moveSlice.actions;
