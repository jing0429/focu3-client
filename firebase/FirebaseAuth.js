import firebase from "./FirebaseService";
import { onAuthStateChanged , signInWithPopup,GoogleAuthProvider ,FacebookAuthProvider,signOut,currentUser} from "firebase/auth";
import APIservice from "../APIservice";
const auth=firebase.auth;

const loginWithGoogle=async()=>{
    const provider=new GoogleAuthProvider();
    return signInWithPopup(auth,provider).then(async result=>{
        let user=result.user;
        let name=user.displayName;
        let email=user.email;
        let photoURL=user.photoURL;
        let res=await APIservice.login(name,email,photoURL);
        return res.data.user;
    })
}
const loginWithFacebook=async()=>{
    const provider=new FacebookAuthProvider();
    return signInWithPopup(auth,provider).then(async result=>{
        const credential=FacebookAuthProvider.credentialFromResult(result);
        const accessToken=credential.accessToken;
        let user=result.user;
        let photoURL=user.photoURL+`?height=200&access_token=${accessToken}`;
        let name=user.displayName;
        let email=user.email;
        let res=await APIservice.login(name,email,photoURL);
        return res.data.user;
    });
}
const subscribeToAuthChanges=(handlerAuthChange)=>{
    onAuthStateChanged(auth,user=>{
        handlerAuthChange(user);
    })
}
const logout=async()=>{
    return await signOut(auth);
}
const getUser=()=>{
    return firebase.auth.currentUser;
}
const firebaseAuth={
    loginWithGoogle,
    loginWithFacebook,
    subscribeToAuthChanges,
    logout,
    getUser
}
export default firebaseAuth;