// Write an asynchronous function that accepts a message 
// string and a delay time in milliseconds. 
// The function should log the message to the
//  console after the specified delay time.
async function wordwithdelay(word,reject){
    await new Promise(resolve=>setTimeout(resolve,reject))
    console.log(word)
}
wordwithdelay("Beautiful Gloria",2000)




// You have an array of user IDs and a function 
// getUserData(id) that returns a Promise with
//  user data when given a user ID. Write an asynchronous
//   function that fetches and logs the data for each user
//    ID one by one, in sequence.


const userIds = [2, 4, 6, 8]; 
async function UserData(userIds) {
  for (const x of userIds) {
    try {
      const Data = await getUserData(x);
      console.log(Data);
    } catch (error) {
      console.error(`${x}:Error fetching user data for ID ${x}:`, error);
    }
  }
}


UserData(userIds);










// You have an asynchronous function performTask() 
// that returns a Promise. The Promise resolves if
//  the task is successful and rejects if there's an
//   error. Write a function that calls performTask()
//    and logs a custom success message if the task is 
//    successful, and a custom error message if there's an error.


let success=true;

const performTask = async()=>{
    let result = await promise;
    console.log({result});
}
let promise =new Promise(function(resolve,reject){
  if(success){
      setTimeout(()=>{resolve("My life is sucessful")});
  }
  else{
      setTimeout(()=>{reject("Am working on my life")});
  }
});
performTask();