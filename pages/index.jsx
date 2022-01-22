import {useContext,useEffect} from "react";
import { Context } from "../context";
function HomePage() {

  // if(process.browser){
  //   window.onbeforeunload=()=>"are you sure?"
  // }
  let {authHandler}=useContext(Context);
  useEffect(authHandler,[]);
  return (
    <div className=" pt-20 mx-auto lg:pt-32 max-w-5xl ">
      
    </div>
  );
}

export default HomePage;
