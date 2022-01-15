import { useEffect, useReducer, createContext, useState } from "react";
import { useRouter } from "next/router";
import firebaseAuth from "../firebase/FirebaseAuth";

const Context = createContext();
const UserProvider = ({ children }) => {
  let [user,setUser]=useState(null);
  const initState = { user: user };
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
  useEffect(() => {
    dispatch({
        type:"LOGIN",
        payload:JSON.parse(localStorage.getItem("user"))
    })
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { UserProvider, Context };
