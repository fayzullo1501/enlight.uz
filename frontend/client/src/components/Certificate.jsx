import React, { useContext } from 'react';
import './Certificate.css';
import certificateImg from '../assets/certificate.png';
import { ThemeContext } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const Certificate = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <section className={`certificate-section ${theme}`}>
      <div className="certificate-card">
        <div className="certificate-left">
          <img src={certificateImg} alt="certificate" className="certificate-img" />
        </div>
        <div className="certificate-right">
          <h2>{t("certificate.title")}</h2>
          <p>{t("certificate.description")}</p>
          <button>{t("certificate.button")}</button>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
