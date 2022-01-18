var userInput = prompt(" Enter the number of the month. (Ex. 1-12): " );
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
if (userInput < 12 && userInput > 1){
    userInput -= 1;
    console.log (months[userInput]);
}
else{
    console.log("User error, enter a number between 1-12")
}
