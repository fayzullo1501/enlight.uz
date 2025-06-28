import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebookF, FaTelegramPlane } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

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
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Telegram"><FaTelegramPlane /></a>
            </div>
          </div>

          <div className="footer-column">
            <p className="footer-heading">{t("footer.info")}</p>
            <a href="/terms">{t("footer.publicOffer")}</a>
            <a href="/privacy">{t("footer.privacyPolicy")}</a>
            <a href="/sitemap">{t("footer.sitemap")}</a>
          </div>

          <div className="footer-column">
            <p className="footer-heading">{t("footer.allCategories")}</p>
            <a href="/design">{t("footer.design")}</a>
            <a href="/marketing">{t("footer.marketing")}</a>
            <a href="/finance">{t("footer.finance")}</a>
            <a href="/drones">{t("footer.drones")}</a>
            <a href="/media">{t("footer.media")}</a>
            <a href="/startup">{t("footer.startup")}</a>
            <a href="/general">{t("footer.generalEdu")}</a>
          </div>

          <div className="footer-column">
            <p className="footer-heading">{t("footer.programming")}</p>
            <a href="/analytics">{t("footer.analytics")}</a>
            <a href="/management">{t("footer.management")}</a>
            <a href="/games">{t("footer.games")}</a>
            <a href="/hobbies">{t("footer.hobbies")}</a>
            <a href="/marketplaces">{t("footer.marketplaces")}</a>
            <a href="/psychology">{t("footer.psychology")}</a>
            <a href="/other">{t("footer.other")}</a>
          </div>

          <div className="footer-column footer-company">
            <p className="footer-gray">{t("footer.legal")}</p>
            <p className="footer-gray">
              {t("footer.address")}
            </p>
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
