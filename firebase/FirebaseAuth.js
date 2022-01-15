import firebase from "./FirebaseService";
import { onAuthStateChanged , signInWithPopup,GoogleAuthProvider ,FacebookAuthProvider,signOut,currentUser} from "firebase/auth";

const auth=firebase.auth;

const loginWithGoogle=async()=>{
    const provider=new GoogleAuthProvider();
    return signInWithPopup(auth,provider).then(result=>{
        let user=result.user;
        let name=user.displayName;
        let uid=user.uid;
        let photoURL=user.photoURL;
        //TODO :: send data to backend
        return result;
    })
}
const loginWithFacebook=async()=>{
    const provider=new FacebookAuthProvider();
    signInWithPopup(auth,provider).then(result=>{
        const credential=FacebookAuthProvider.credentialFromResult(result);
        const accessToken=credential.accessToken;
        let user=result.user;
        let photoURL=user.photoURL+`?height=200&access_token=${accessToken}`;
        let name=user.displayName;
        let uid=user.uid;
        //TODO :: send data to backend
        return result;
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