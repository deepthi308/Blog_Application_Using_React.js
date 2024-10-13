import { Button, FormControl, InputAdornment, InputLabel, OutlinedInput, Stack, TextField } from "@mui/material"
import "./registerForm.css"
import { IconButton } from "@chakra-ui/react"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { handleRegister } from "../../redux/actions/actions";
import { fireBaseAuth } from "../../firebase/firebase";

export default function RegisterForm() {

    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state = useSelector((state) => state);
    console.log(state)

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    
    const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
    
    const register = () => {
        setUserInfo({
        email: "",
        password: "",
        confirmPassword: ""
        })
        if (userInfo.email && userInfo.password && userInfo.confirmPassword) {
            if (userInfo.password === userInfo.confirmPassword) {
                      fireBaseAuth.createUserWithEmailAndPassword(userInfo.email, userInfo.password).then((authUser) => {
        dispatch(handleRegister(authUser));
         toast.success("Account Created Successfully");
          navigate("/")
}).catch((error) => {
              toast.success("User already exist, Please login");
})
            } else {
                toast.error("Password and Confirm password should be same");
            }
        } else {
            toast.error("Please enter all the fields");
        }
    }

    const handleInputChange = ({target}) => {
        const { name, value } = target;
        setUserInfo({
            ...userInfo,
            [name]:value
        })
    }

  return (
      <section className="loginform-container">
          <h1 className="loginform-title">Sign Up</h1>
          <form className="loginform" >
              <TextField id="outlined-basic" type="email" label="Email Id" variant="outlined" value={userInfo.email} name="email" onChange={handleInputChange}/>
              <FormControl  variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
                      type={showPassword ? 'text' : 'password'}
                      value={userInfo.password} name="password"
                      onChange={handleInputChange}
            endAdornment={
              <InputAdornment position="end">
                 <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                        style={{border: "none", background: "transparent", cursor: "pointer"}}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
              </FormControl>
               <FormControl  variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password2">Confirm Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password2"
                      type={showPassword1 ? 'text' : 'password'}
                      value={userInfo.confirmPassword} name="confirmPassword"
                      onChange={handleInputChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword1}
                        style={{border: "none", background: "transparent", cursor: "pointer"}}
                >
                  {showPassword1 ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
              </FormControl>
              <Stack direction="row" justifyContent={"space-between"} alignItems={"center"}>
                  <p className="message">Already a user?</p>
                  <Link to={"/login"}>  <Button variant="contained" style={{backgroundColor:"rgb(70, 2, 96)"}}>Login</Button></Link>
              </Stack>
              <Button variant="contained" style={{ backgroundColor: "rgb(70, 2, 96)" }} onClick={register}>Register</Button>
          </form>
    </section>
  )
}
