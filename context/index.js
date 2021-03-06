import { useEffect, useReducer, createContext, useState } from "react";
import { useRouter } from "next/router";
import firebaseAuth from "../firebase/FirebaseAuth";
import { toast } from "react-toastify";
const Context = createContext();
const UserProvider = ({ children }) => {
  let [user,setUser]=useState(null);
  const initState = { user };
  const userReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
          localStorage.setItem("user", JSON.stringify(action.payload));
          setUser(action.payload);
        return { ...state, user: action.payload };
      case "LOGOUT":
          localStorage.removeItem("user");
          setUser(null);
        return { ...state, user: null };
    }
  };
  let [state, dispatch] = useReducer(userReducer, initState);
  let router = useRouter();
  let authHandler=() => {
    let user=JSON.parse(localStorage.getItem("user"));
    if(user){
      dispatch({
          type:"LOGIN",
          payload:user
      })
    }else{
      toast.warning("please login first!")
      router.push("/login");
    }
  }
  useEffect(authHandler, []);

  return (
    <Context.Provider value={{ state, dispatch ,authHandler}}>{children}</Context.Provider>
  );
};

export { UserProvider, Context };
