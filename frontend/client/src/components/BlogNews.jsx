import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./BlogNews.css";

import img1 from "../assets/banner-2.png";
import img2 from "../assets/banner-2.png";
import img3 from "../assets/banner-2.png";

function BlogNews() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const posts = [
    {
      title: t("blog.title1"),
      desc: t("blog.desc1"),
      date: t("blog.date1"),
      image: img1,
    },
    {
      title: t("blog.title2"),
      desc: t("blog.desc2"),
      date: t("blog.date2"),
      image: img2,
    },
    {
      title: t("blog.title3"),
      desc: t("blog.desc3"),
      date: t("blog.date3"),
      image: img3,
    },
  ];

  return (
    <section className="blog-news">
      <div className="news-header">
        <h2>{t("nav.blognews")}</h2>
        <span
          className="view-all"
          onClick={() => navigate(`/${i18n.language}/blog`)}
        >
          {t("blog.viewAll")} →
        </span>
      </div>

      <div className="news-grid">
        {posts.map((post, index) => (
          <div className="news-card" key={index}>
            <div className="news-image">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="news-title">{post.title}</div>
            <div className="news-desc">{post.desc}</div>
            <div className="news-date">{post.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogNews;
