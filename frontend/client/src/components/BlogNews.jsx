import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import blogNews from "../data/blogNewsData";
import "./BlogNews.css";

function BlogNews() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const posts = blogNews[i18n.language] || [];
  const visiblePosts = posts.slice(0, 3);

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
        {visiblePosts.map((post) => (
          <div
            className="news-card"
            key={post.id}
            onClick={() => navigate(`/${i18n.language}/blog/${post.id}`)}
            style={{ cursor: "pointer" }}
          >
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
