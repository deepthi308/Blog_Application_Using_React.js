import { Box, Button, Fab, Modal, Stack, TextField } from "@mui/material"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { handleDeleteBlog, handleEditBlog } from "../../redux/actions/actions";
import "./blog.css"
import { useState } from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: "rgb(244, 216, 255)",
  boxShadow: 24,
  p: "1.6rem",
  borderRadius: "0.3rem",
  display: "flex",
  flexDirection: "column",
  gap: "2rem"
};

export default function Blog({ blog }) {

  const [blogInfo, setBlogInfo] = useState({
    id: blog.id,
    title: "",
    body: "",
    image: ""
  })

  const dispatch = useDispatch()
  // const blogs = useSelector((state) => state.blogs)
  
  const handleTitleChange = ({target}) => {
    setBlogInfo({
      ...blogInfo,
      title: target.value
    })
  }

  const handleContentChange = ({target}) => {
    setBlogInfo({
      ...blogInfo,
      body: target.value
  })
  }

  const handleImageChange = ({target}) => {
    setBlogInfo({
      ...blogInfo,
      image: target.value
    })
  }
  
  const handleDelete = () => {
    dispatch(handleDeleteBlog(blog.id))
  }

  const handleUpdateBlog = () => {
    console.log(blogInfo)
    dispatch(handleEditBlog(blogInfo));
    handleClose()
  }

  const [open, setOpen] = useState(false);
  const handleOpenModel = () => {
    setBlogInfo({
      ...blogInfo,
      title: blog.title,
      body: blog.body,
      image: blog.image
    })
    setOpen(true);
  }

  // const handleIncreaseLikes = () => {
  //     dispatch(blog.id)
  // }

  // const handleIncreaseDisLikes = () => {

  // }

  const handleClose = () => setOpen(false);

  return (
    <li className="blog">
      <img className="blog-image" src={blog.image} alt="Blog" />
      <section className="blog-bottom">
        <h1 className="blog-title">
          {blog.title}
        </h1>
        <p className="blog-body">
          {
            blog.body.length > 130 ? <>{blog.body.slice(0, 180)}...<Link className="read-more" to={`/blog/${blog.id}`}>Read More</Link></> :
              blog.body
          }
        </p>
        <ul className="blog-tags">
          {
            blog.tags.map((tag, index) => <li key={index} className="blog-tag">{tag}</li>)
          }
        </ul>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack direction={"row"} gap={"1rem"}>
          <div className="views">
           <VisibilityIcon/> {blog.views}
          </div>
          <div className="likes"><ThumbUpIcon/>{blog.reactions.likes}</div>
          <div className="dislikes">
          <ThumbDownIcon />{blog.reactions.dislikes}
          </div>
        </Stack>
         <Stack direction={"row"} gap={"1rem"}>
        <Fab color="secondary" aria-label="edit" style={{width: "2rem", height: "1.8rem", backgroundColor: "rgb(70, 2, 96)"}} onClick={handleOpenModel}>
        <EditIcon style={{fontSize: "1rem"}}/>
            </Fab>
             <Fab color="secondary" aria-label="edit" style={{width: "2rem", height: "1.8rem", backgroundColor: "rgb(70, 2, 96)"}} onClick={handleDelete}><DeleteIcon /></Fab>
      </Stack>
      </Stack>
        
      </section>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <TextField id="outlined-basic" label="Title" variant="outlined" style={{width: "100%"}} value={blogInfo.title} onChange={handleTitleChange}/>
         <TextField
          id="outlined-multiline-static"
          label="Blog Content"
          multiline
            rows={4}
            value={blogInfo.body}
            onChange={handleContentChange}
          />
          <TextField id="outlined-basic" label="Image URL" variant="outlined" value={blogInfo.image}
            onChange={handleImageChange} />
                  <Button style={{backgroundColor: "rgb(70, 2, 96)"}} variant="contained" onClick={handleUpdateBlog}>Save</Button>
        </Box>

      </Modal>
    </li>
  )
}
