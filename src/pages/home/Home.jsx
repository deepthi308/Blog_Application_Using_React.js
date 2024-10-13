import { useSelector } from "react-redux"
import Blogs from "../../components/blogs/Blogs"
import "./home.css"

export default function Home() {

  const blogs =  useSelector((state) => state.blogs);

  return (
      <section className="homePage">
          <Blogs blogs={blogs} />
    </section>
  )
}
