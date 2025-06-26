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
import About from "./pages/About";
import Courses from "./pages/Courses";
import BlogNews from "./pages/BlogNews";
import Contact from "./pages/Contact";

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blognews" element={<BlogNews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
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
