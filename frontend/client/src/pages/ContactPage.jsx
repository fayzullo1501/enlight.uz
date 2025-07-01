import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import ContactInfo from "../components/contact/ContactInfo";

function ContactPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Enlight — {t("nav.contact")}</title>
        <meta name="description" content="Контакты Enlight: адрес, телефоны, соцсети, карта проезда." />
        <meta property="og:title" content="Enlight — Контакты" />
        <meta property="og:description" content="Свяжитесь с нами — учебный центр Enlight всегда на связи." />
        <meta property="og:image" content="/og.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
      </Helmet>

      <main>
        <ContactInfo />
      </main>
    </>
  );
}

export default ContactPage;
