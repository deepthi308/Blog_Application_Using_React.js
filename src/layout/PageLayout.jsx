import { useLocation } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"

export default function PageLayout({children}) {
    const {pathname} = useLocation()
    // console.log(pathname)
  return (
      <>
          {
              pathname !== "/login" && pathname !== "/register" ? (<><Navbar />{children}</>) : (children)
        }
      </>
  )
}
