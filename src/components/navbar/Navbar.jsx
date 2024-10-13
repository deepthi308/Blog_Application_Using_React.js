import { useDispatch, useSelector } from "react-redux"
import "./navbar.css"
import {Link, useNavigate} from "react-router-dom"
import { handleLogout } from "../../redux/actions/actions";
import { fireBaseAuth } from "../../firebase/firebase";

export default function Navbar() {

    const user = useSelector((state) => state?.user);
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const logout = () => {
        dispatch(handleLogout());
        fireBaseAuth.signOut();
        navigate("/login");
    }

  return (
      <section className="navBar">
          <div className="navBar-left">
                <Link to="/"><h1 className="navBar-logo">Blogify</h1></Link>
          <ul className="navBar-links">
             <Link to="/"><li className="navBar-link">Home</li></Link> 
              <Link to="/addblog"><li className="navBar-link">Add Blog</li></Link>
              <Link to="/about"><li className="navBar-link">About</li></Link>
              </ul>
       </div>
          <div className="navBar-right">
              <Link to="/login">{
                  !user ? <button className="navBar-button">Login</button> : <button className="navBar-button" onClick={logout}>Logout</button>
              }</Link>
          </div>
    </section>
  )
}