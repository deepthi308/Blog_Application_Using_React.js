import { useParams } from "react-router-dom"
import { Stack } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import VisibilityIcon from '@mui/icons-material/Visibility';
import "./individualBlog.css"
import { useSelector } from "react-redux";

export default function IndividualBlog() {

    
    const { id } = useParams();
   const blogsData = useSelector((state) => state.blogs);
    
    const blog = blogsData.find((blog) => {
        console.log(blog.id, id);
        return blog.id === Number(id);
    });
    console.log(blog)

  return (
    <div className="individualBlog">
          <img src={blog.image} alt="Blog" className="blog-image1"/>
              <section className="blog-bottom1">
        <h1 className="blog-title">
          {blog.title}
        </h1>
        <p className="blog-body">
          {
            blog.body
          }
        </p>
        <ul className="blog-tags">
          {
            blog.tags.map((tag, index) => <li key={index} className="blog-tag">{tag}</li>)
          }
        </ul>
        <Stack direction={"row"} gap={"2rem"}>
          <div className="views">
           <VisibilityIcon/> {blog.views}
          </div>
          <div className="likes"><ThumbUpIcon/>{blog.reactions.likes}</div>
          <div className="dislikes">
          <ThumbDownIcon />{blog.reactions.dislikes}
          </div>
        </Stack>
      </section>
    </div>
  )
}
