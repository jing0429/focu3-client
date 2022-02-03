import { useEffect, useContext, useState } from "react";
import { Context } from "../../context";
import APIservice from "../../APIservice";
import Photo from "./Photo";
import UserInfo from "./UserInfo";
import { toast } from "react-toastify";
const User = () => {
  let {
    state: { user },
  } = useContext(Context);
  let [userInfo, setUserInfo] = useState({});
  useEffect(async () => {
    if (user) {
      try {
        let result = await APIservice.userInfo(user);
        setUserInfo(result.data.user);
      } catch (err) {
        console.log(err);
        toast.error(<div>Something goes wrong!<br/>Please try again later!</div>)
      }
    }
  }, []);

  return (
    <div className="relative z-10 dark:bg-black bg-[#fff]   border-1  rounded-3xl rounded-tl-none dark:border-white  flex flex-col lg:flex-row h-full items-center p-4 justify-between shadow-xl">
      {userInfo && <Photo userInfo={userInfo} />}
      {userInfo && <UserInfo userInfo={userInfo} />}
    </div>
  );
};

export default User;
