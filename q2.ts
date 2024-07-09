// const axios = require("axios");
import axios from "axios";

/* assign interface/type to the function definition properly */
const getTodo = async (todoId: number) => {
  /* Your code here */
  try{
    const todo = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const user = await axios.get(`https://jsonplaceholder.typicode.com/users/${todo.data.userId}`);
    return {
      owner : user.data.name,
      title : todo.data.title,
      completed : todo.data.completed
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

//รหัส นศ.: 660612146
//ชื่อ-สกุล : ธีธัช ยอดบุญ
