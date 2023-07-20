import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useRender from "../components/useRender";

// import icons
import deadpoolIcon from "../Assets/deadpool-icon.png";
import hulkIcon from "../Assets/hulk-icon.png";
import ironmanIcon from "../Assets/ironman-icon.png";
import blackpantherIcon from "../Assets/blackpanther-icon.png";
import captainamericaIcon from "../Assets/captainamerica-icon.png";
import venomIcon from "../Assets/venom-icon.png";
import wolverineIcon from "../Assets/wolverine-icon.png";
import spidermanIcon from "../Assets/spiderman-icon.png";

export default function Level1() {
  const navigate = useNavigate();
  useEffect(() => {
    const cards = document.querySelector(".cards");
    const colors = [
      { background: `url(${deadpoolIcon}) maroon` },
      { background: `url(${hulkIcon}) lime` },
      { background: `url(${ironmanIcon}) gold` },
      { background: `url(${blackpantherIcon}) purple` },
      { background: `url(${captainamericaIcon}) tomato` },
      { background: `url(${venomIcon}) dimgray` },
      { background: `url(${wolverineIcon}) khaki` },
      { background: `url(${spidermanIcon}) white` },
    ];

    useRender(cards, colors, "card", 1, navigate);
  }, []);

  return (
    <div className="game">
      <h2 className="heading-h2">Level 1</h2>
      <div className="cards"></div>
    </div>
  );
}
