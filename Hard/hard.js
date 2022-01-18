var tomHeight = 9;
var tomMass = 8;

var jerryHeight = 10; 
var jerryMass= 45; 

var tomBMI = tomMass/(tomHeight * tomHeight);
var jerryBMI = jerryMass/ (jerryHeight * jerryHeight); 

console.log("Is Tom’s BMI higher than Jerry’?", tomBMI > jerryBMI ? true:false);