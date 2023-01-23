const prompt=require("prompt-sync")({sigint:true})

function converterFunction(){
    var kilometersToMiles = 1.6;
    var userInput = parseInt(prompt("Enter the number of kilometers >>"))
    let result = userInput / kilometersToMiles;
    console.log("There are " + result + " miles in " + userInput + " kilometers");

}

converterFunction();

