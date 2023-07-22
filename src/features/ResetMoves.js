// allows us to clear temporary count of moves for each element

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { moveClearCurrent } from "../features/moveSlice";

export default function ResetMoves() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(moveClearCurrent());
  }, []);
  return null;
}
