import RenderCards from "../components/RenderCards";

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

  return (
    <div className="game">
      <RenderCards colors={colors} cardClass="card" cardsClass="cards" currentLevel={1} />
    </div>
  );
}
