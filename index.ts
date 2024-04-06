import inquirer from "inquirer"
const Currency :any={
    USD:1,
    EUR:0.91,
    GBR:0.76,
    INR:74.57,
    PKR:280
};
let userAns  = await inquirer.prompt(
   [
       {
        name : "from",
        message: " Enter From Currency",
        type: "list",
        choices:["USD","EUR","GBR","INR","PKR"]
       },
       {
        name : "to",
        message: " Enter to Currency",
        type: "list",
        choices:["USD","EUR","GBR","INR","PKR"]
       },
       {
        name : "amount",
        message: " Enter Your Amount",
        type: "number"
       }
   ]
);

let fromAmount  = Currency[userAns.from]
let toAmount = Currency[userAns.to]
let amount = userAns.amount
let baseAmount = amount / fromAmount
let convertedAmount =baseAmount *toAmount

console.log(convertedAmount);



 
 
