import { useNavigate } from "react-router-dom";
import "../Styles/homepage-styles.css";

export default function Game() {
  const navigate = useNavigate();
  return (
    <div className="game homepage">
      <h1 className="homepage-title">Welcome to the MEMORY GAME</h1>
      <p className="homepage-description">
        The game is intended to improve your memory and attention. You can track your stats right in the application. Be sure that
        any information about your progress is keeping locally on your browser and no one has access to your stats.
      </p>
      <h2>Rules</h2>
      <ul className="homepage-rules">
        <li>The cards have a pictures on one side and each picture appears on two cards.</li>
        <li>The game starts with all the cards face down and player turn over two cards.</li>
        <li>If two cards have the same picture, they remain revealed, otherwise they turn face down again.</li>
        <li>The goal is to reval all the cards in as little as possible moves. </li>
        <li>Don't cheat!</li>
      </ul>
      <button className="homepage-button" onClick={() => navigate("/level-1")}>
        Start game
      </button>
      <div className="homepage-contacts">
        <div className="homepage-contact-github">
          <svg height="32" viewBox="0 0 16 16" width="32">
            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
          </svg>
          <a href="https://github.com/shologin" rel="noopener noreferrer nofollower" target="_blank">
            shologin
          </a>
        </div>
        <div className="homepage-contact-repo">
          <a href="#" target="_blank" rel="noopener nofollower noreferrer">
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="30">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            <p>Star this repo in GitHub</p>
          </a>
        </div>
      </div>
    </div>
  );
}
