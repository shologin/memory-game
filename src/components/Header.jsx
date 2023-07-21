import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h1>Memory game</h1>
      </Link>
      <h3>Scores: 100</h3>
    </div>
  );
}
