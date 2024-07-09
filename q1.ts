// const axios = require("axios");
import axios from "axios";

/* assign interface/type to the function definition properly */
const getUser = async (userId: number) => {
  /* Your code here */
  try{
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = res.data;
    return user.name
  }catch(err) {
    return "INVALID USER ID";
  }
};

//test case
const input1 = 1;
const input2 = 100;

//run
getUser(input1).then((result) => console.log(result));
getUser(input2).then((result) => console.log(result));

// module.exports = getUser;
export default getUser;

//รหัส นศ.: 660612146
//ชื่อ-สกุล : ธีธัช ยอดบุญ