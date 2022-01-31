import axios from "axios";

class APIservices {
  constructor() {
    this.APIurl = "https://focu3.herokuapp.com/api";
  }
  async login(username, email, photoUrl) {
    return await axios.post(`${this.APIurl}/user/login`, {
      username,
      email,
      photoUrl,
    });
  }
  async userInfo(userID) {
    return await axios.post(`${this.APIurl}/user/info`, { userID });
  }
  async getTasks(userID, curWeek) {
    return await axios.post(`${this.APIurl}/task/search?week=${curWeek}`, {
      userID,
    });
  }
  async saveTask(userID, task) {
    return await axios.post(`${this.APIurl}/task/save`, { userID, task });
  }
}

export default new APIservices();
