import "./app.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/home/Home";
import AddBlog from "./pages/addBog/AddBlog";
import About from "./pages/aboutPage/About";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import Login from "./pages/login/Login";
import PageLayout from "./layout/PageLayout";
import Register from "./pages/registerPage/Register";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import IndividualBlog from "./pages/individualBlog/IndividualBlog";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageLayout><Home /></PageLayout>} />
        <Route path="/addblog" element={<PageLayout><AddBlog /></PageLayout>} />
        <Route path="/about" element={<PageLayout><About /></PageLayout>} />
        <Route path="/login" element={<PageLayout><Login /></PageLayout>} />
        <Route path="/register" element={<PageLayout><Register /></PageLayout>} />
        <Route path="/blog/:id" element={<PageLayout><IndividualBlog /></PageLayout>} />
        <Route path="*" element={<PageLayout><PageNotFound /></PageLayout>} />
      </Routes>
       <ToastContainer position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"/>
   </Router>
  );
}


