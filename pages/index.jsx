import {useContext,useEffect} from "react";
import { Context } from "../context";
import Memo from "../components/memo/Memo";
import Task from "../components/task/Task";
function HomePage() {

  // if(process.browser){
  //   window.onbeforeunload=()=>"are you sure?"
  // }
  let {authHandler}=useContext(Context);
  useEffect(authHandler,[]);
  return (
    <div >
      <Memo />
      <Task />
    </div>
  );
}

export default HomePage;
