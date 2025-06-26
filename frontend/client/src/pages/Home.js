import { useTranslation } from "react-i18next";
import Banner from "../components/Banner";
import About from "../components/About";
import Courses from "../components/Courses";
import Professions from "../components/Professions";
import Promo from "../components/Promo";
import BlogNews from "../components/BlogNews";
import ApplyForm from "../components/ApplyForm";

function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <Banner />
      <About />
      <Courses />
      <Professions />
      <Promo />
      <BlogNews />
      <ApplyForm />
    </div>
  );
}

export default Home;
