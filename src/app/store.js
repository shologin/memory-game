import { configureStore } from "@reduxjs/toolkit";
import movesReducer from "../features/moveSlice";
const store = configureStore({
  reducer: {
    moves: movesReducer,
  },
});

export default store;
