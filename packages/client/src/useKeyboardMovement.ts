import { useEffect } from "react";
import { useMUD } from "./MUDContext";

export const useKeyboardMovement = () => {
  const {
    api: { moveBy },
  } = useMUD();

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === "w") {
        moveBy(0, -1);
      }
      if (e.key === "s") {
        moveBy(0, 1);
      }
      if (e.key === "a") {
        moveBy(-1, 0);
      }
      if (e.key === "d") {
        moveBy(1, 0);
      }
    };

    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, [moveBy]);
};