import { useTranslation } from "react-i18next";
import "./ContactInfo.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Добавлено для иконок

function ContactInfo() {
  const { t } = useTranslation();

  return (
    <section className="contact-section">
      <div className="contact-top">
        <div className="contact-card">
          <h3>{t("contact.addressTitle")}</h3>
          <p><strong>{t("contact.addressText")}</strong></p>
          <p>{t("contact.addressNote")}</p>
        </div>

        <div className="contact-map">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae8a5768e6379c3fa16b451ef37c79ba0092311e0fbad9a79d229a631b1b70caf&amp;source=constructor"
            width="100%"
            height="100%"
            frameBorder="0"
            title="map"
          ></iframe>
        </div>
      </div>

      <div className="contact-bottom">
        <div className="contact-card">
          <div>
            <h3>{t("contact.phoneTitle")}</h3>
            <p>+998 93 596-19-21</p>
            <p>+998 99 996-16-96</p>
          </div>
          <p className="contact-note">{t("contact.phoneNote")}</p>
        </div>

        <div className="contact-card">
          <div>
            <h3>{t("contact.emailTitle")}</h3>
            <p>info@enlight.uz</p>
            <p>edu@enlight.uz</p>
          </div>
          <p className="contact-note">{t("contact.emailNote")}</p>
        </div>

        <div className="contact-card">
            <div>
                <div className="contact-header-social">
                <h3>{t("contact.socialTitle")}</h3>
                <div className="contact-socials">
                    <a href="https://www.linkedin.com/company/enlightuz"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://www.instagram.com/enlight.uz/"><i className="fab fa-instagram"></i></a>
                    <a href="https://t.me/enlight_uz"><i className="fab fa-telegram-plane"></i></a>
                </div>
                </div>
            </div>
            <p className="contact-note">{t("contact.socialNote")}</p>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
