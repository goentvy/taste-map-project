import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          🍽️ TasteMap
        </Link>
        <nav className="header__nav">
          <Link to="/">맛집 리스트</Link>
          <Link to="/about">소개</Link>
        </nav>
      </div>
    </header>
  );
}