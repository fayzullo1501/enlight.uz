import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  Navigate
} from "react-router-dom";
import { useTranslation } from "react-i18next";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import BlogNewsPage from "./pages/BlogNewsPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTopButton from "./components/ScrollToTopButton";
import DetailsPage from "./pages/DetailsPage";
import BlogNewsDetailsPage from "./pages/BlogNewsDetailsPage";
import ProfessionsPage from "./pages/ProfessionsPage";
import ScrollToTop from "./components/ScrollToTop";




function LanguageWrapper() {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (["ru", "uz", "en"].includes(lang)) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/professions" element={<ProfessionsPage />} />
        <Route path="/blognews" element={<BlogNewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/:type/:id" element={<DetailsPage />} />
        <Route path="/blog/:id" element={<BlogNewsDetailsPage />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

function App() {
  const stored = localStorage.getItem("preferredLanguage");
  const preferredLanguage = stored && ["ru", "uz", "en"].includes(stored)
    ? stored
    : "ru";

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={`/${preferredLanguage}`} />} />
        <Route path="/:lang/*" element={<LanguageWrapper />} />
      </Routes>
    </Router>
  );
}


export default App;
