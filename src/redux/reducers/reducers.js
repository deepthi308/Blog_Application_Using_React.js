import { ADD_BLOG, DELETE_BLOG, DISPLAY_BLOGS, EDIT_BLOG, LOGIN, LOGOUT, REGISTER, SAVE_BLOG } from "../constants/constants"
import blogsData from "../../fixtures/blogs.json"


const initialState = {
    user: null,
    blogs: blogsData
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state, user: action.user
            }
        case REGISTER:
               return {
                ...state, user: action.user
            }
        case LOGOUT:
            return {
                ...state,
                user: null
            };
        case DISPLAY_BLOGS:
            return state;
        case ADD_BLOG:
            return {
                ...state, blogs: [...state.blogs, action.blog]
            };
        case SAVE_BLOG:
            return state;
        case EDIT_BLOG:
            return {
                ...state,
                blogs: state.blogs.map((blog) => {
                    console.log(blog.id, action.blog.id)
                    if (blog.id === Number(action.blog.id)) {
                        return {
                            ...blog,
                            title: action.blog.title,
                            body: action.blog.body,
                            image: action.blog.image
                        }
                    } else {
                        return blog;
                    }
                })
            };
        case DELETE_BLOG:
            console.log(action)
            return {
                ...state, blogs: state.blogs.filter((blog) => blog.id !== action.blogId)
            };
        default:
            return state;
}
}