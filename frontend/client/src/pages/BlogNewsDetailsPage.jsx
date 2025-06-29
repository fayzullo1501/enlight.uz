import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import blogNews from "../data/blogNewsData";
import "./BlogNewsDetailsPage.css";

function BlogNewsDetailsPage() {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const posts = blogNews[lang] || [];
  const post = posts.find((el) => String(el.id) === id);

  if (!post) return <p>Not found</p>;

  return (
    <section className="blog-details">
      <div className="blog-details-container">
        <img src={post.image} alt={post.title} className="blog-details-image" />
        <h1 className="blog-details-title">{post.title}</h1>
        <p className="blog-details-date">{post.date}</p>
        <p className="blog-details-desc">{post.desc}</p>
      </div>
    </section>
  );
}

export default BlogNewsDetailsPage;
