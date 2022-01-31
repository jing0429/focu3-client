import { useEffect,useContext} from "react"
import Pills from "../components/dashboard/Pills";
import { Context } from "../context"



//TODO : add visiulization
const dashboard=()=>{
    let {authHandler}=useContext(Context);
    useEffect(authHandler,[]);
    return (
        <>
        <Pills />
        </>
    )
}

export default dashboard