import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "./Header.css";
import flagRU from "../assets/ru-flag.svg";
import flagUZ from "../assets/uz-flag.svg";
import flagEN from "../assets/en-flag.svg";

function Header() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { toggleTheme, theme } = useContext(ThemeContext);
  const [showLangs, setShowLangs] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    localStorage.setItem("preferredLanguage", lng);
    i18n.changeLanguage(lng);
    navigate(`/${lng}`);
    setShowLangs(false);
    setMenuOpen(false);
  };

  const getLangLabel = () => {
    switch (i18n.language) {
      case "ru": return " Русский";
      case "uz": return " O'zbekcha";
      case "en": return " English";
      default: return " Русский";
    }
  };

  const getLangFlag = () => {
    switch (i18n.language) {
      case "ru": return flagRU;
      case "uz": return flagUZ;
      case "en": return flagEN;
      default: return flagRU;
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to={`/${i18n.language}/`}>Enlight<span className="dot">.</span></Link>
        </div>

        <nav className="nav">
          <Link to={`/${i18n.language}/`}>{t("nav.home")}</Link>
          <Link to={`/${i18n.language}/about`}>{t("nav.about")}</Link>
          <Link to={`/${i18n.language}/courses`}>{t("nav.courses")}</Link>
          <Link to={`/${i18n.language}/blognews`}>{t("nav.blognews")}</Link>
          <Link to={`/${i18n.language}/contact`}>{t("nav.contact")}</Link>
        </nav>

        <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>☰</div>

        <div className="actions">
          <div className="lang-select" onClick={() => setShowLangs(!showLangs)}>
            <img src={getLangFlag()} alt="flag" />
            {getLangLabel()}
            {showLangs && (
              <div className="lang-dropdown">
                <div onClick={() => changeLanguage("ru")}><img src={flagRU} alt="ru" /> Русский</div>
                <div onClick={() => changeLanguage("uz")}><img src={flagUZ} alt="uz" /> O'zbekcha</div>
                <div onClick={() => changeLanguage("en")}><img src={flagEN} alt="en" /> English</div>
              </div>
            )}
          </div>

          <button className="theme-btn" onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          <a href="https://lms.enlight.uz" className="class-btn" target="_blank" rel="noreferrer">
            Войти в класс
          </a>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <Link to={`/${i18n.language}/`}>{t("nav.home")}</Link>
          <Link to={`/${i18n.language}/about`}>{t("nav.about")}</Link>
          <Link to={`/${i18n.language}/courses`}>{t("nav.courses")}</Link>
          <Link to={`/${i18n.language}/blognews`}>{t("nav.blognews")}</Link>
          <Link to={`/${i18n.language}/contact`}>{t("nav.contact")}</Link>
          <div onClick={() => setShowLangs(!showLangs)} className="lang-select">
            <img src={getLangFlag()} alt="flag" /> {getLangLabel()}
          </div>
          {showLangs && (
            <div className="lang-dropdown">
              <div onClick={() => changeLanguage("ru")}><img src={flagRU} alt="ru" /> Русский</div>
              <div onClick={() => changeLanguage("uz")}><img src={flagUZ} alt="uz" /> O'zbekcha</div>
              <div onClick={() => changeLanguage("en")}><img src={flagEN} alt="en" /> English</div>
            </div>
          )}
          <button className="theme-btn" onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <a href="https://lms.enlight.uz" className="class-btn" target="_blank" rel="noreferrer">
            Войти в класс
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
