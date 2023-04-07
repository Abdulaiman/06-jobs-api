import { Link, useNavigate } from "react-router-dom";
import "./blog-preview.css";

interface BlogPostPreviewProps {
  post: {
    _id: string;
    title: string;
    author: string;
    date: string;
    summary: string;
    content: string;
    imageUrl?: string;
  };
}

const BlogPreview: React.FC<BlogPostPreviewProps> = ({
  post,
}: BlogPostPreviewProps): JSX.Element => {
  const navigate = useNavigate();
  const handleShowBlogPage = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const id = post._id;
    localStorage.setItem("blogId", id);
    navigate("/blog-page");
  };
  const user = JSON.parse(`${localStorage.getItem("user")}`);

  return (
    <Link to={"/blog-page"} onClick={handleShowBlogPage}>
      <div className="blog-post-preview-container">
        <img src={post?.imageUrl} alt="Blog post" />
        <div className="blog-post-preview-text">
          <h2>{post?.title}</h2>
          <p>
            {post?.content?.length < 100
              ? post?.content
              : `${post?.content?.slice(0, 50)}... `}
          </p>
          <div className="blog-post-preview-metadata">
            <p>Posted {post?.date.slice(0, 10)}</p>
            <p>By {post?.author}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default BlogPreview;
