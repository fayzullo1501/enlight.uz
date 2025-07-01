import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import About from "../components/About";
import Courses from "../components/Courses";
import Professions from "../components/Professions";
import Certificate from "../components/Certificate";
import Review from "../components/Review"; 
import Promo from "../components/Promo";
import BlogNews from "../components/BlogNews";
import ApplyForm from "../components/ApplyForm";

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Enlight — {t("nav.home")}</title>
        <meta name="description" content="Учебный центр Enlight — качественные курсы, обучение и профессии." />
        <meta property="og:title" content="Enlight — Главная" />
        <meta property="og:description" content="Курсы, профессии, блог и развитие с Enlight." />
        <meta property="og:image" content="/og.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
      </Helmet>

      <div>
        <Banner />
        <About />
        <Courses />
        <Professions />
        <Certificate />
        <Review />
        <Promo />
        <BlogNews />
        <ApplyForm />
      </div>
    </>
  );
}

export default Home;
