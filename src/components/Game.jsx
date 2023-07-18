import { useEffect } from "react";

export default function Game() {
  useEffect(() => {
    const cards = document.querySelector(".cards");
    // const colors = ["AliceBlue", "Chartreuse", "Aquamarine", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Coral"];
    // const colorsPicker = [...colors, ...colors];
    // const cardsCount = colorsPicker.length;

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

    // const special = document.querySelector(".special");
    // special.addEventListener("click", () => {
    //   special.style.background = cardStyles[7].background;
    //   special.style.backgroundSize = "80px";
    //   special.style.backgroundRepeat = "no-repeat";
    //   special.style.backgroundPosition = "center";
    // });

    // Game state
    let revealedCount = 0;
    let activeCard = null;
    let awaitingEndOfMove = false;

    // Create card
    function createCard(color) {
      const card = document.createElement("div");
      card.classList.add("card");
      card.style.background = color;
      card.style.backgroundSize = "80px";
      card.style.backgroundRepeat = "no-repeat";
      card.style.backgroundPosition = "center";

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
      <div className="cards"></div>
    </div>
  );
}
