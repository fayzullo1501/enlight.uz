import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import AboutBanner from "../components/about/AboutBanner";
import AboutIntro from "../components/about/AboutIntro";

function AboutPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Enlight — {t("nav.about")}</title>
        <meta name="description" content="О компании Enlight: миссия, ценности, подход к обучению." />
        <meta property="og:title" content="Enlight — О нас" />
        <meta property="og:description" content="Узнайте больше о команде и философии учебного центра Enlight." />
        <meta property="og:image" content="/og.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
      </Helmet>

      <AboutBanner />
      <AboutIntro />
    </>
  );
}

export default AboutPage;
