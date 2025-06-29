import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebookF, FaTelegramPlane } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import i18n from "../i18n"; // путь может отличаться, если `i18n.js` в другом месте


const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">
          <div className="footer-column">
            <p className="footer-title">+998 93 596 19 21</p>
            <p className="footer-subtitle">{t("footer.contactCenter")}</p>
            <p className="footer-subtitle">info@enlight.uz</p>
            <div className="footer-icons">
              <a href="https://www.instagram.com/enlight.uz/" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://www.facebook.com/people/Enlight/100083614892216/" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://t.me/enlight_uz" aria-label="Telegram"><FaTelegramPlane /></a>
            </div>
          </div>

          <div className="footer-column">
            <p className="footer-heading">{t("footer.info")}</p>
            <a href="/terms">{t("footer.publicOffer")}</a>
            <a href="/privacy">{t("footer.privacyPolicy")}</a>
            <a href="/sitemap">{t("footer.sitemap")}</a>
          </div>

          <div className="footer-column">
            <p className="footer-heading">{t("footer.company")}</p>
            <Link to={`/${i18n.language}/about`}>{t("footer.about")}</Link>
            <Link to={`/${i18n.language}/courses`}>{t("footer.courses")}</Link>
            <Link to={`/${i18n.language}/professions`}>{t("footer.professions")}</Link>
            <Link to={`/${i18n.language}/blognews`}>{t("footer.blog")}</Link>
            <Link to={`/${i18n.language}/team`}>{t("footer.team")}</Link>
            <Link to={`/${i18n.language}/contact`}>{t("footer.contacts")}</Link>
          </div>

          <div className="footer-column">
            <p className="footer-heading">{t("footer.allCategories")}</p>
            <Link to={`/${i18n.language}/courses#languages`}>{t("footer.languages")}</Link>
            <Link to={`/${i18n.language}/courses#programming`}>{t("footer.programming")}</Link>
            <Link to={`/${i18n.language}/courses#analytics`}>{t("footer.analytics")}</Link>
            <Link to={`/${i18n.language}/courses#design`}>{t("footer.design")}</Link>
            <Link to={`/${i18n.language}/courses#management`}>{t("footer.management")}</Link>
            <Link to={`/${i18n.language}/courses#marketing`}>{t("footer.marketing")}</Link>
          </div>


          <div className="footer-column footer-company">
            <p className="footer-gray">{t("footer.legal")}</p>
            <p className="footer-gray">{t("footer.address")}</p>
            <p className="footer-gray">{t("footer.registration")}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p><strong>Enlight</strong> | {t("footer.slogan")}</p>
          <p>© NTM «ENLIGHT», 2025</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
