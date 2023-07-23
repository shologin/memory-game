import "../Styles/page404-styles.css";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div className="page-404">
      <h1 className="page-404-title">Ooops...someone happened into a middle of nowhere</h1>
      <h3 className="page-404-description">
        You can hang around or you can return to the <Link to="/">Homepage</Link>
      </h3>
      <img src="src/Assets/404-image.png" alt="404" className="img-404" />
    </div>
  );
}
