import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/level2-style.css";
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
import thanosIcon from "../Assets/thanos-icon.png";
import hammerIcon from "../Assets/hammer-icon.png";

export default function Level2() {
  const navigate = useNavigate();
  useEffect(() => {
    const cards = document.querySelector(".cards-lvl2");
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
    ];

    useRender(cards, colors, "card-lvl2", 2, navigate);
  }, []);

  return (
    <div className="game">
      <h2 className="heading-h2">Level 2</h2>
      <div className="cards-lvl2"></div>
    </div>
  );
}
