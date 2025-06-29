import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import blogNews from "../data/blogNewsData";
import "./BlogNewsPage.css";

function BlogNewsPage() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const lang = i18n.language;

  const posts = blogNews[lang] || [];

  return (
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
  );
}

export default BlogNewsPage;
