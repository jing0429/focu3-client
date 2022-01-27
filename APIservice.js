import axios from "axios";

class APIservices{
    constructor(){
        this.APIurl="http://localhost:8000/api"
    }
    async login(username,email,photoUrl){
        return await axios.post(`${this.APIurl}/user/login`,{username,email,photoUrl});
    }
    async getTasks(userID,curWeek){
        return await axios.get(`${this.APIurl}/task/search?week=${curWeek}`,{userID});
    }
    async saveTask(userID,task){
        return await axios.post(`${this.APIurl}/task/save`,{userID,task});
    }
    



}

export default new APIservices();