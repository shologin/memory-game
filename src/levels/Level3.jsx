import "../Styles/level3-style.css";
import RenderCards from "../features/RenderCards";

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

  return (
    <div className="game">
      <RenderCards colors={colors} cardClass="card-lvl3" cardsClass="cards-lvl3" currentLevel={3} isLastLevel={true} />
    </div>
  );
}
