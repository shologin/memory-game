import "../Styles/finalPage-styles.css";
import winnerImage from "../Assets/winner-image.png";

export default function FinalPage() {
  return (
    <div className="final-page">
      <h1>Congratulations!</h1>
      <h2>You've passed the game.</h2>
      <img src={winnerImage} alt="winner-image" className="winner-img" />
      <div className="final-page-description">
        <p>
          Thanks for your attention to this mini-game. I appreciate that you have passed the game till the end. You're amazing 😎.
        </p>
        <p>If you enjoyed the game you can leave a big yellow star on GitHub repo.</p>
      </div>
      <div className="final-page-contact-repo">
        <a href="https://github.com/shologin/memory-game" target="_blank" rel="noopener nofollower noreferrer">
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
  );
}
