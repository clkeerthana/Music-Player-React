import React,{useState} from "react";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../contexts";
import {Link, useNavigate} from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../styles/auth.css';

const Login=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    // const [error,setError]=useState("");
    const navigate=useNavigate();


    const handleLogin=async (e)=>{
        e.preventDefault();
        try{
            await doSignInWithEmailAndPassword(email,password);
            toast.sucess("Login successful!",{
                position: "top-right",
                autoClose: 3000, // Auto close after 3 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setTimeout(() => navigate("/playlist"), 2000); 
        }
        catch(err){
            toast.error(`Error: ${err.message}`, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            
        }


    };

    const handleGoogleSignIn = async () => {
        try {
          await doSignInWithGoogle();
          toast.success("Logged in with Google! 🚀", {
            position: "top-right",
            autoClose: 3000,
          });
          setTimeout(() => navigate("/playlist"), 2000);
        } catch (err) {
          toast.error(`Google Sign-in Failed: ${err.message}`, {
            position: "top-right",
            autoClose: 4000,
          });
        }
      };
      return (
        <div className="auth-container">
          
          <div className="auth-box">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            <button type="submit">Login</button>
          </form>
          <div>
          <button onClick={handleGoogleSignIn} className="google-btn">Sign in with Google</button>
          </div>
          <p>Don't have an account? <Link to="/">Sign Up</Link></p>
          </div>
          {/* Toast Container */}
          <ToastContainer />
        </div>
      );
    };
    
    export default Login;