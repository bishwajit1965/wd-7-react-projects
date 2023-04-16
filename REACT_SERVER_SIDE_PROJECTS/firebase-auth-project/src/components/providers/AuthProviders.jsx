import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { createContext } from "react";
import app from "../../firebase/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  // Create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Send email verification message
  const verifyEmailAddress = () => {
    return sendEmailVerification(auth.currentUser);
  };
  // Sign in
  const userLogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Reset password
  const changeUserPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const authInfo = {
    createUser,
    verifyEmailAddress,
    userLogIn,
    changeUserPassword,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
