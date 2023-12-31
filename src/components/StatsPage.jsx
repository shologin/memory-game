import { useState } from "react";
import "../Styles/statsPage-styles.css";

export default function StatsPage() {
  const stats = getDataFromLocalStorage();
  // console.log(stats);

  const handleClick = () => {
    localStorage.clear();
    location.reload();
  };

  return (
    <div className="stats-page-wrapper">
      {(stats.length > 0 && (
        <div className="stats-page">
          <h1>Your stats 🏆</h1>
          <div className="stats-page-clear-button" onClick={handleClick}>
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="20px">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
            <h4>Clear stats</h4>
          </div>
          <ul className="stats-page-list">
            <li>
              <div>Level</div>
              <div>Number of moves</div>
            </li>
            {stats.map((item) => (
              <div className="stats-page-level" key={item.level}>
                <li style={{ background: item.background }}>
                  <div>Level {item.level}</div>
                  <div>{item.score}</div>
                </li>
              </div>
            ))}
          </ul>
        </div>
      )) || (
        <div className="stats-page-dummy">
          <h2>Stats will appear here</h2>
          <p>Play the game to gain stats</p>
        </div>
      )}
    </div>
  );
}

function getDataFromLocalStorage() {
  let i = 1;
  const storageStats = [];
  while (i <= localStorage.length) {
    let level = {
      level: i,
      score: localStorage.getItem(`lvl-${i}`),
      background: i % 2 ? "#374151" : "#1f2937",
    };
    storageStats.push(level);
    i++;
  }
  console.log(localStorage.length);
  return storageStats;
}
