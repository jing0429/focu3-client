import { useEffect,useContext} from "react"
import { Context } from "../context"



//add visiulization

const dashboard=()=>{
    let {authHandler}=useContext(Context);
    useEffect(authHandler,[]);
    return (
        <h1>hello</h1>
    )
}

export default dashboard