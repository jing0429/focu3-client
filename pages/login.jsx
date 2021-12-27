import firebaseAuth from "../firebase/FirebaseAuth";

const login = () => {
  const loginWithGoogleHandler = () => {
    try {
      let result = firebaseAuth.loginWithGoogle();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  const loginWithFacebookHandler = () => {
    try {
      let result = firebaseAuth.loginWithFacebook();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="bg-green dark:bg-purple max-w-4xl h-96  mx-5 lg:mx-auto mt-20 rounded-lg pt-16 overflow-hidden transition duration-300">
        <h1 className="text-gray-800 dark:text-white text-4xl text-center  font-sans mt-5">
           Login with
        </h1>
        <div className="flex flex-col sm:flex-row   justify-around h-2/3 items-center ">
          <button onClick={loginWithGoogleHandler} className="text-red-400 text-bold text-3xl dark:bg-black bg-white w-2/3 sm:w-1/3 mx-auto h-20 rounded font-sans  hover:shadow-lg hover:text-red-600 transition duration-300">
            <div className="flex justify-center">
              <i className="bi bi-google  mx-3"></i>
              <div className="">Google</div>
            </div>
          </button>
          <button onClick={loginWithFacebookHandler} className="text-blue-400 text-bold text-3xl dark:bg-black bg-white w-2/3 sm:w-1/3 mx-auto h-20 rounded font-sans hover:shadow-lg hover:text-blue-600 transition duration-300" >
            <div className="flex justify-center">
              <i className="bi bi-facebook fill-white mx-3"></i>
              <div className="">Facebook</div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default login;
