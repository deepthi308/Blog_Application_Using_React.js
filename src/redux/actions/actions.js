import { ADD_BLOG, DELETE_BLOG, DISPLAY_BLOGS, EDIT_BLOG, LOGIN, LOGOUT, REGISTER, SAVE_BLOG } from "../constants/constants"

export const handleLogin = (user) => {
    return {
        type: LOGIN,
        user: user
    };
}

export const handleRegister = (user) => {
    return {
        type: REGISTER,
        user: user
    };
}

export const handleLogout = (user) => {
 return {
     type: LOGOUT,
     user: user
    };
}

export const handleDisplayBlog = () => {
 return {
     type: DISPLAY_BLOGS,
    };
}

export const handleAddBlog = (blog) => {
return {
    type: ADD_BLOG,
    blog: blog
    };
}

export const handleSaveBlog = (blog) => {
return {
    type: SAVE_BLOG,
    blog: blog
    };
}

export const handleEditBlog = (blog) => {
return {
    type: EDIT_BLOG,
    blog: blog
    };
}

export const handleDeleteBlog = (blogId) => {
return {
    type: DELETE_BLOG,
    blogId: blogId
    };
}

// export const handleIncreaseLikes = (blogId) => {
// return {
//     type: DELETE_BLOG,
//     blogId: blogId
//     };
// }

// export const handleIncreaseLikes = (blogId) => {
// return {
//     type: DELETE_BLOG,
//     blogId: blogId
//     };
// }