import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { moveMade, moveSet } from "../features/moveSlice";
import ResetMoves from "../features/ResetMoves";

export default function RenderCards({ colors, cardClass, cardsClass, currentLevel }) {
  const navigate = useNavigate();
  const numOfMoves = useSelector((state) => state.moves.numOfMoves);
  const dispatch = useDispatch();

  useEffect(() => {
    const cards = document.querySelector(`.${cardsClass}`);
    const nextLevel = (currentLevel + 1).toString();
    const colorsPicker = [...colors, ...colors];
    const cardsCount = colorsPicker.length;

    // Game state
    let revealedCount = 0;
    let activeCard = null;
    let awaitingEndOfMove = false;

    // Create card
    function createCard(color) {
      const card = document.createElement("div");
      card.classList.add(cardClass);
      card.setAttribute("data-color", color);
      card.setAttribute("data-revealed", "false");

      card.addEventListener("click", () => {
        const revealed = card.getAttribute("data-revealed");
        if (awaitingEndOfMove || revealed === "true" || card === activeCard) {
          return;
        }

        card.style.background = color;
        card.style.backgroundSize = "60px";
        card.style.backgroundRepeat = "no-repeat";
        card.style.backgroundPosition = "center";

        if (!activeCard) {
          activeCard = card;
          return;
        }

        const colorToMatch = activeCard.getAttribute("data-color");
        if (colorToMatch === color) {
          activeCard.setAttribute("data-revealed", "true");
          card.setAttribute("data-revealed", "true");
          awaitingEndOfMove = false;
          activeCard = null;
          revealedCount += 2;
          dispatch(moveMade());

          if (revealedCount === cardsCount) {
            dispatch(moveSet(`lvl-${currentLevel}`));
            alert(`Level passed. Welcome to the level ${nextLevel}`);
            navigate(`/level-${nextLevel}`);
          }

          return;
        }

        awaitingEndOfMove = true;

        setTimeout(() => {
          card.style.background = null;
          card.style.backgroundSize = null;
          card.style.backgroundRepeat = null;
          card.style.backgroundPosition = null;

          activeCard.style.background = null;
          activeCard.style.backgroundSize = null;
          activeCard.style.backgroundRepeat = null;
          activeCard.style.backgroundPosition = null;

          awaitingEndOfMove = false;
          activeCard = null;
          dispatch(moveMade());
        }, 1000);
      });

      return card;
    }

    // Render cards
    for (let i = 0; i < cardsCount; i++) {
      const randomIndex = Math.floor(Math.random() * colorsPicker.length);
      const color = colorsPicker[randomIndex].background;
      const card = createCard(color);
      colorsPicker.splice(randomIndex, 1);
      cards.appendChild(card);
    }
  }, []);

  return (
    <div className="render-cards">
      <ResetMoves />
      <div className="game-level-heading">
        <h2>Level {currentLevel}</h2>
        <h2>{numOfMoves} moves</h2>
      </div>
      <div className={cardsClass}></div>
    </div>
  );
}
