
import { createUserWithEmailAndPassword ,
    GoogleAuthProvider,
    signInWithEmailAndPassword,signInWithPopup,fetchSignInMethodsForEmail} from "firebase/auth";

import { auth } from "../firebase/firebase";

export  const doCreateUserWithEmailAndPassword = async(email,password)=>{
    return createUserWithEmailAndPassword(auth, email,password);

};

export const doSignInWithEmailAndPassword = async (email, password) => {
    const signInMethods = await fetchSignInMethodsForEmail(auth, email);
    
    if (signInMethods.length === 0) {
      throw new Error("User does not exist. Please sign up first.");
    }
    
    return signInWithEmailAndPassword(auth, email, password);
  };

export  const doSignInWithGoogle = async()=>{
    const provider=new GoogleAuthProvider();
    const result=await signInWithPopup(auth,provider);
    const email = result.user.email;
    // Check if user exists before creating account
  const signInMethods = await fetchSignInMethodsForEmail(auth, email);
  if (signInMethods.length === 0) {
    return result; // Allow new user to sign up
  } else {
    throw new Error("This Google account is already registered. Please login.");
  }
};

// export  const doSignInWithEmailAndPassword = async(email,password)=>{
//     return signInWithEmailAndPassword(auth, email,password);

// };

export const doSignout=()=>{
    return auth.signOut();
};

// export const doPasswordReset=(password)=>{
//     return sendPasswordResetEmail(auth.currentUser,password);
// };

// export const doPasswordChange=(password)=>{

//     return updatePassword(auth.currentUser,password);
// };

// export const doSendEmailVerification=()=>{
//     return sendEmailVerification(auth.currentUser,{
//         url
//     })
// }
