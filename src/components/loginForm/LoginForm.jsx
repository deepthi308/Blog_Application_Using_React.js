import { Button, FormControl, InputAdornment, InputLabel, OutlinedInput, Stack, TextField } from "@mui/material"
import "./loginForm.css"
import { IconButton } from "@chakra-ui/react"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleLogin } from "../../redux/actions/actions";
import { fireBaseAuth } from "../../firebase/firebase";
import { toast } from "react-toastify";

export default function LoginForm() {

  const [showPassword, setShowPassword] = useState(false);
  const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const login = () => {
    setUserInfo({
        email: "",
        password: ""
    })
       fireBaseAuth.signInWithEmailAndPassword(userInfo.email, userInfo.password).then((authUser) => {
        dispatch(handleLogin(authUser));
         toast.success("Signed In Successfully");
          navigate("/")
}).catch((error) => {
              toast.success("User doesn't exist, Please signup");
})

  }


    
  
  const handleInputChange = ({target}) => {
        const { name, value } = target;
        setUserInfo({
            ...userInfo,
            [name]:value
        })
    }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
      <section className="loginform-container">
          <h1 className="loginform-title">Sign In</h1>
          <form className="loginform" >
              <TextField id="outlined-basic" label="Email" variant="outlined" name="email" value={userInfo.email} onChange={handleInputChange}/>
              <FormControl  variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={userInfo.password}
            onChange={handleInputChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                        edge="end"
                        style={{border: "none", background: "transparent", cursor: "pointer"}}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
              </FormControl>
              <Stack direction="row" justifyContent={"space-between"} alignItems={"center"}>
                  <p className="message">Not a user?</p>
                  <Link to={"/register"}>  <Button variant="contained" style={{backgroundColor:"rgb(70, 2, 96)"}}>Register</Button></Link>
              </Stack>
              <Button variant="contained" style={{backgroundColor:"rgb(70, 2, 96)"}} onClick={login}>Login In</Button>
          </form>
    </section>
  )
}
