import firebaseAuth from "../firebase/FirebaseAuth";
import { useEffect, useContext } from "react";
import { Router, useRouter } from "next/router";
import { Context } from "../context";
const login = () => {
  let {
    state: { user },
    dispatch,
  } = useContext(Context);
  let router = useRouter();
  if(user)router.push("/");
  const loginWithGoogleHandler = async () => {
    try {
      let result = await firebaseAuth.loginWithGoogle();
      console.log(result.user);
      dispatch({
        type: "LOGIN",
        payload: result.user.displayName,
      });
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  const loginWithFacebookHandler = async () => {
    try {
      let result = await firebaseAuth.loginWithFacebook();
      dispatch({
        type: "LOGIN",
        payload: result.user,
      });
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="mt-20  h-96 flex flex-col sm:flex-row justify-center mx-2">
        <div className=" hidden w-1/3 sm:block  pt-10 ml-10 bg-blue-400 dark:bg-purple   sm:rounded-l-md ">
          <h1 className="font-extrabold text-gray-900 dark:text-white  text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center font-inter">
            Productivity is not how many but how important .
          </h1>
        </div>
        <div className="sm:mr-10 bg-green dark:bg-blue-500 w-full sm:w-1/3  sm:rounded-r-md ">
          <h1 className="mt-5 text-center dark:text-white text-4xl font-sans font-semibold">
            Login With
          </h1>
          <div className="flex  h-4/5 flex-col items-center justify-center">
            <button
              className=" text-3xl w-64 h-16 m-5 rounded-sm"
              style={{ backgroundColor: "#4267B2" }}
              onClick={loginWithFacebookHandler}
            >
              <i className=" mx-2 bi bi-facebook" />
              Facebook
            </button>
            <button
              className="bg-white dark:bg-black text-3xl w-64 h-16 m-5 rounded-sm "
              onClick={loginWithGoogleHandler}
            >
              <i className="bi bi-google mx-2" />
              Google
            </button>
          </div>
        </div>
      </div>
      {/* <img src="https://graph.facebook.com/1969547179865069/picture?height=200&access_token=EAADwkmPsi8gBALJ99Lra7WBAN55k6OeWx1ZBFJ6aSRQKkls2jtmOZAMY8M9ScOKPTzwoZB56izOPvJlBoae0lTjoc14sC0sgs1JrdUUJx6FoGWM02rxIHwwCq5u2NxKpp6eIy64dgFjDE3z8gBDEpQCnzo4cU0stwNNGa8VmJK0XMsMFo7BGDjv6POUheqB5PnxFwDryHe88KmwT1iIbLkZA9tsGXCL6xwqZBIK9tMwZDZD" alt="" /> */}
    </>
  );
};

export default login;
