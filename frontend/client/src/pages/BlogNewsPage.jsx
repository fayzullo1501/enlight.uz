import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import blogNews from "../data/blogNewsData";
import "./BlogNewsPage.css";

function BlogNewsPage() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const lang = i18n.language;

  const posts = blogNews[lang] || [];

  return (
    <>
      <Helmet>
        <title>Enlight — {t("nav.blognews")}</title>
        <meta name="description" content="Свежие новости, статьи и анонсы учебного центра Enlight." />
        <meta property="og:title" content="Enlight — Блог и Новости" />
        <meta property="og:description" content="Читайте блог Enlight: советы по обучению, новости центра и многое другое." />
        <meta property="og:image" content="/og.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
      </Helmet>

      <section className="blog-news-page">
        <div className="blog-news-grid">
          {posts.map((post) => (
            <div
              className="blog-news-card"
              key={post.id}
              onClick={() => navigate(`/${lang}/blog/${post.id}`)}
            >
              <div className="blog-news-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-news-title">{post.title}</div>
              <div className="blog-news-desc">{post.desc}</div>
              <div className="blog-news-date">{post.date}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default BlogNewsPage;
