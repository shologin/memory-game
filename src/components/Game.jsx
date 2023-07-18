import { useEffect } from "react";

export default function Game() {
  useEffect(() => {
    const cards = document.querySelector(".cards");
    const colors = ["AliceBlue", "Chartreuse", "Aquamarine", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Coral"];
    const colorsPicker = [...colors, ...colors];
    const cardsCount = colorsPicker.length;

    const cardStyles = [{ background: 'url("src/Assets/deadpool-icon.png") maroon' }];
    const special = document.querySelector(".special");
    special.addEventListener("click", () => {
      special.style.background = cardStyles[0].background;
      special.style.backgroundSize = "80px";
      special.style.backgroundRepeat = "no-repeat";
      special.style.backgroundPosition = "center";
    });

    // Game state
    let revealedCount = 0;
    let activeCard = null;
    let awaitingEndOfMove = false;

    // Create card
    function createCard(color) {
      const card = document.createElement("div");
      card.classList.add("card");
      card.style.background = color;

      return card;
    }

    // Render cards
    // for (let i = 0; i < cardsCount; i++) {
    //   const randomIndex = Math.floor(Math.random() * colorsPicker.length);
    //   const color = colorsPicker[randomIndex];
    //   const card = createCard(color);
    //   colorsPicker.splice(randomIndex, 1);
    //   cards.appendChild(card);
    // }
  }, []);

  return (
    <div className="game">
      <div className="cards">
        <div className="special"></div>
      </div>
    </div>
  );
}
