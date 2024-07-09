// const axios = require("axios");
import axios from "axios";

/* assign interface/type to the function definition properly */
const getTodo = async (todoId: number) => {
  /* Your code here */
  try{
    const user = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${user.data.userId}`);
    return {
      owner : res.data.name,
      title : user.data.title,
      completed : user.data.completed
    }
    
  }catch(err) {
    return "INVALID USER ID";
  }
};

//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;
