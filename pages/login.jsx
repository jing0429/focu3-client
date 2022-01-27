import firebaseAuth from "../firebase/FirebaseAuth";
import { useContext } from "react";
import { useRouter } from "next/router";
import { Context } from "../context";
import { toast } from "react-toastify";
const login = () => {
  let {
    state: { user },
    dispatch,
  } = useContext(Context);
  let router = useRouter();
  if (user) router.push("/");
  const loginWithGoogleHandler = async () => {
    try {
      let result = await firebaseAuth.loginWithGoogle();
      dispatch({
        type: "LOGIN",
        payload: result,
      });
      toast("login successfully");
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
        payload: result,
      });
      toast("login successfully");
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="pt-36  h-1/2 md:h-2/3 flex  justify-center mx-2">
        <div className=" hidden w-1/3 sm:block  pt-10 ml-10 bg-blue-400 dark:bg-gray-500  sm:rounded-l-md border-2 border-green dark:border-white">
          {/* <h1 className="font-extrabold text-gray-900 dark:text-white  text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center font-inter">
            Productivity is not how many but how important .
          </h1> */}
          <img src="/unlock.svg" className="mt-5" />
        </div>
        <div className="sm:mr-10 dark:bg-cyan-600 w-full sm:w-1/3  sm:rounded-r-md border-green border-2 dark:border-white">
          <h1 className="mt-5 text-center display-5 dark:text-white">
            Login With
          </h1>
          <div className="flex justify-evenly items-center h-1/2 flex-wrap cursor-pointer">
            <div className="w-20 h-20 rounded-full flex justify-center items-center" onClick={loginWithFacebookHandler}>
              <i className="bi bi-facebook text-7xl text-blue-600 dark:text-white"></i>
            </div>
            <div className="w-20 h-20 rounded-full flex justify-center items-center">
              <i className="bi-google text-7xl text-red-600 dark:text-white" onClick={loginWithGoogleHandler}></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
