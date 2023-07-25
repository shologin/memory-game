import "../Styles/statsPage-styles.css";
import buildingImage from "../Assets/building-image.png";

export default function StatsPage() {
  return (
    <div className="stats-page">
      <h1>This feature is still in development.</h1>
      <h2>Please, visit this page later</h2>
      <img src={buildingImage} alt="building" />
      <h3>We are working on it.</h3>
    </div>
  );
}

function getDataFromLocalStorage() {
  let data = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    data[key] = value;
  }
  return data;
}

function sortLevels(a, b) {
  const levelA = parseInt(a.split("-")[1]);
  const levelB = parseInt(b.split("-")[1]);

  return levelA - levelB;
}
