import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Level1() {
  const navigate = useNavigate();
  useEffect(() => {
    const cards = document.querySelector(".cards");
    const colors = [
      { background: 'url("src/Assets/deadpool-icon.png") maroon' },
      { background: 'url("src/Assets/hulk-icon.png") lime' },
      { background: 'url("src/Assets/ironman-icon.png") gold' },
      { background: 'url("src/Assets/blackpanther-icon.png") purple' },
      { background: 'url("src/Assets/captainamerica-icon.png") tomato' },
      { background: 'url("src/Assets/venom-icon.png") dimgray' },
      { background: 'url("src/Assets/wolverine-icon.png") khaki' },
      { background: 'url("src/Assets/spiderman-icon.png") white' },
    ];
    const colorsPicker = [...colors, ...colors];
    const cardsCount = colorsPicker.length;

    // Game state
    let revealedCount = 0;
    let activeCard = null;
    let awaitingEndOfMove = false;

    // Create card
    function createCard(color) {
      const card = document.createElement("div");
      card.classList.add("card");
      card.setAttribute("data-color", color);
      card.setAttribute("data-revealed", "false");

      card.addEventListener("click", () => {
        const revealed = card.getAttribute("data-revealed");
        if (awaitingEndOfMove || revealed === "true" || card === activeCard) {
          return;
        }

        card.style.background = color;
        card.style.backgroundSize = "80px";
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

          if (revealedCount === cardsCount) {
            alert("Level passed. Welcome to the level 2");
            navigate("/level-2");
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
    <div className="game">
      <h2 className="heading-h2">Level 1</h2>
      <div className="cards"></div>
    </div>
  );
}
