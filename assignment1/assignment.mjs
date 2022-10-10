// import fetch from "node-fetch";

// /**
//  * @description: Function to fetch data from the API
//  */
// const getData = async () => {
//     // Fetch data from the API, wait till the response is received
//     const responseObject = await fetch();

//     // Convert the response to JSON, wait till the conversion is done
//     const textData = await responseObject.text();

//     console.log(textData);
// };

// getData();

// Program to display random age according to given name through API call implementing async and await

import fetch from "node-fetch";
import promptSync from "prompt-sync"

async function returnAge(argName){
    try{
        // Passing data of name from argument in url by get method
        const response = await fetch(`https://api.agify.io/?name=${argName}`);
        const result = await response.json();
    
        // Object destructuring to extract name and age
        const { age , name} = result;  
        console.log(`Age of ${name} is : `, age);
        // return { age:age, name:name };
    }catch(err) {
        console.log(err);
    }
}

// Window object is not defined in node.js environment(Vs code) so to use prompt-->
const prompt = promptSync();
var name = prompt("Enter name : ");

returnAge(name); 
// const { age, name } = await returnAge(inputName);
// console.log(`Age of ${name} is : `, age);