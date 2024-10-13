import { Button, Stack, TextField } from "@mui/material"
import "./addBlog.css"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { handleAddBlog } from "../../redux/actions/actions"

export default function AddBlog() {
  const blogs =   useSelector((state)=> state.blogs)

    const [blog, setBlog] = useState({
        id:blogs.length + 1,
        title: "",
        image: "",
        body: "",
        tags: [],
        reactions: {
        },
        "userId": Date.now()
  },)
    
    const [tag, setTag] = useState("")
    const dispatch = useDispatch();
    
    const handleAddTag = () => {
        if (!tag) return;
        console.log(blog)
        setBlog({
            ...blog,
            tags: [...blog.tags, tag]
        })
        setTag("")
    }

    const handleTitleChange = ({target}) => {
        setBlog({
            ...blog,
            title: target.value
        });
    }

    const handleContentChange = ({target}) => {
        setBlog({
            ...blog,
            body: target.value
        });
    }

    const handleImageChange = ({target}) => {
        setBlog({
            ...blog,
            image: target.value
        })
    }

    const handleAdd = () => {
        dispatch(handleAddBlog(blog));
                setBlog({
                id:blogs.length + 1,
                title: "",
                image: "",
                body: "",
                tags: [],
                reactions: {
                },
                userId: Date.now()
                })
    }

  return (
      <section className="addBlogPage">
          <h1>Add Blog Page</h1>
          <Stack gap={"2rem"} marginTop={"2rem"} width={"90%"} maxWidth={"30rem"}>
              <TextField id="outlined-basic" label="Title" variant="outlined" style={{width: "100%"}} value={blog.title} onChange={handleTitleChange} />
         <TextField
          id="outlined-multiline-static"
          label="Blog Content"
          multiline
                  rows={4}
                  value={blog.body}
          onChange={handleContentChange}
          />
              <TextField id="outlined-basic" label="Image URL" variant="outlined" value={blog.image} onChange={handleImageChange}/>
              <Stack direction={"row"} gap={"2rem"}>
                  <TextField id="outlined-basic" label="Tags" variant="outlined" style={{ width: "100%" }} value={tag} onChange={({target})=>setTag(target.value)}/>
                  <Button style={{ backgroundColor: "rgb(70, 2, 96)" }} variant="contained" onClick={handleAddTag}>Add</Button>
              </Stack >
              {blog.tags.length > 0 && <Stack direction={"row"} gap={"2rem"}>
                  {
                      blog.tags.map((tag, index) => {
                          return <Button color="rgb(70, 2, 96)" style={{backgroundColor: "#fff", borderRadius: "1rem", padding: "0.3rem 0.6rem"}} key={index}>#{tag}</Button>
                      })
                  }
              </Stack >}
                  <Button style={{backgroundColor: "rgb(70, 2, 96)"}} variant="contained" onClick={handleAdd} >Add Blog</Button>
          </Stack>
    </section>
  )
}