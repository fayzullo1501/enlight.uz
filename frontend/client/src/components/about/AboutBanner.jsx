import "./AboutBanner.css";
import aboutImage from "../../assets/about-banner.png"; // замени на своё изображение

function AboutBanner() {
  return (
    <section className="about-banner">
      <img src={aboutImage} alt="About Enlight" />
    </section>
  );
}

export default AboutBanner;
