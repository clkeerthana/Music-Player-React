import React, {useState} from "react";
import { doCreateUserWithEmailAndPassword ,doSignInWithGoogle} from "../contexts";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../styles/auth.css';


const Signup=()=>{
    const[email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    
    
    const navigate=useNavigate();
    

    const handleSignup=async(e)=>{
        e.preventDefault();
        try{
            await doCreateUserWithEmailAndPassword(email,password);
            toast.success("Signup successful!");
            setTimeout(() => navigate("/playlist"), 2000); 

        }
        catch(err){
            setError(err.message);
            toast.error(err.message);
        }
    };

    const handleGoogleSignUp = async () => {
        try {
          await doSignInWithGoogle();
          toast.success("Signed up with Google successfully! 🚀");
          setTimeout(() => navigate("/playlist"), 2000); 
        } catch (err) {
          setError(err.message);
          toast.error(`Error: ${err.message}`);
        }
      };

    return (
        <div className="auth-container">
          
          <div className="auth-box">
          <h2>Sign Up</h2>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSignup}>
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
            <button type="submit">Sign Up</button>
          </form>
          <div>
          <button onClick={handleGoogleSignUp} className="google-btn">Sign up with Google</button>
          </div>
          <p>Already have an account? <Link to="/login">Login</Link></p>
          </div>
        </div>
      );


};
export default Signup;