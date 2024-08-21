/*//////////////////////////////////////////////////////////////
                      TRY / CATCH (ERROR HANDLING)
//////////////////////////////////////////////////////////////*/

try {
  // Run test
  hello.toUpperCase();
} catch {
  //Runs if error if found
  console.log(`Error`);
}

function yell(msg) {
  try {
    console.log(msg.toUpperCase().repeat(3));
  } catch (e) {
    console.log(e);
    console.log(`Please pass a string next time`);
  }
  
}