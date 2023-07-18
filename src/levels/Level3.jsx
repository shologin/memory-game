import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/level3-style.css";

// import icons
import deadpoolIcon from "../Assets/deadpool-icon.png";
import hulkIcon from "../Assets/hulk-icon.png";
import ironmanIcon from "../Assets/ironman-icon.png";
import blackpantherIcon from "../Assets/blackpanther-icon.png";
import captainamericaIcon from "../Assets/captainamerica-icon.png";
import venomIcon from "../Assets/venom-icon.png";
import wolverineIcon from "../Assets/wolverine-icon.png";
import spidermanIcon from "../Assets/spiderman-icon.png";
import thanosIcon from "../Assets/thanos-icon.png";
import hammerIcon from "../Assets/hammer-icon.png";
import grootIcon from "../Assets/groot-icon.png";
import antmanIcon from "../Assets/antman-icon.png";

export default function Level3() {
  const navigate = useNavigate();
  useEffect(() => {
    const cards = document.querySelector(".cards-lvl3");
    const colors = [
      { background: `url(${deadpoolIcon}) maroon` },
      { background: `url(${hulkIcon}) lime` },
      { background: `url(${ironmanIcon}) gold` },
      { background: `url(${blackpantherIcon}) purple` },
      { background: `url(${captainamericaIcon}) tomato` },
      { background: `url(${venomIcon}) dimgray` },
      { background: `url(${wolverineIcon}) khaki` },
      { background: `url(${spidermanIcon}) white` },
      { background: `url(${thanosIcon}) indigo` },
      { background: `url(${hammerIcon}) silver` },
      { background: `url(${grootIcon}) olivedrab` },
      { background: `url(${antmanIcon}) powderblue` },
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
      card.classList.add("card-lvl3");
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

          if (revealedCount === cardsCount) {
            alert("You win! Refresh the page to play again");
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
      <h2 className="heading-h2">Level 3</h2>
      <div className="cards-lvl3"></div>
    </div>
  );
}
