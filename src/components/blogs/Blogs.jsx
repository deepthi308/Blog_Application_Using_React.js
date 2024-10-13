import Blog from "../blog/Blog"
import "./blogs.css"

export default function Blogs({ blogs }) {
    console.log(blogs)
  return (
      <ul className="blogs">
          {
              blogs.map((blog, index) => {
                 return <Blog key={index} blog={blog} />
              })
          }
   </ul>
  )
}
