import firebase from "./FirebaseService";
import { onAuthStateChanged , signInWithPopup,GoogleAuthProvider ,FacebookAuthProvider} from "firebase/auth";
const auth=firebase.auth;

const loginWithGoogle=async()=>{
    const provider=new GoogleAuthProvider();
    return await signInWithPopup(auth,provider);
}
const loginWithFacebook=async()=>{
    const provider=new FacebookAuthProvider();
    return await signInWithPopup(auth,provider);
}
const subscribeToAuthChanges=(handlerAuthChange)=>{
    onAuthStateChanged(auth,user=>{
        handlerAuthChange(user);
    })
}

const firebaseAuth={
    loginWithGoogle,
    loginWithFacebook,
    subscribeToAuthChanges
}
export default firebaseAuth;