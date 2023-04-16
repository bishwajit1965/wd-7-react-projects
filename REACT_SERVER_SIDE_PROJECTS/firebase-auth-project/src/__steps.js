/**
 * -----------------------------------------------
 * EMAIL PASSWORD AUTHENTICATION STEPS - FIREBASE
 * -----------------------------------------------
 * 1. Authentication
 * 2. Authorization
 * 3. Sign in / Log in
 * 4. Register / Sign up
 *------------------------------------
 * FOR SIGN UP OR REGISTER
 *------------------------------------
 * 1. Create Register.jsx file
 * 2. Create a folder named firebase in the source folder of the project
 * 3. Create firebase.config.js file in firebase folder
 * 4. Import the functions you need from the SDKs you need from firebase and paste it in firebase.config.js file
 * 5. Export the app from firebase.config.js (export default app)
 * 6. Then - import app from "../../firebase/firebase.config";
 * 7. Thn - import { getAuth, createUserWithEmailAndPassword,sendEmailVerification,updateProfile,} from "firebase/auth";
 * 8. Then get this function from firebase for sign up- createUserWithEmailAndPassword(auth, email, password).then().catch()
 * 9. Ten for sending email verification write this firebase function - sendEmailVerification(user) - in an arrow function  * *    and call it in createUserWithEmailAndPassword(){ sendEmailVerification(user).then(result=>{}).catch(error)}
 * 10. Then - say in an arrow function updateUserData(name)=>{updateProfile(user, {displayName: name})} and call this
 *     function within createUserWithEmailAndPassword()
 *
 *-----------------------------------
 * CREATE CONTEXT API
 *-----------------------------------
 * 1. Create context and export
 * 2. Create provider
 * 3. Set context value
 * 4. To access the value : use useContext() hook
 * 5. St AuthProvider in main.jsx
 * 6. Inside provider access children props and then use it
 *
 * ------------------------------------------------
 * BREAK DOWN THE LOGGING PROCEDURE INTO RWO PLACES
 * ------------------------------------------------
 *
 *
 *
 */
