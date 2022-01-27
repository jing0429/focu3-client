import { useEffect,useContext} from "react"
import { Context } from "../context"
import APIservice from "../APIservice";


//TODO : add visiulization
const dashboard=()=>{
    let {authHandler}=useContext(Context);
    useEffect(authHandler,[]);
    //let tasks=APIservice.getTasks(1);
    //console.log(tasks);
    return (
        <></>
    )
}

export default dashboard