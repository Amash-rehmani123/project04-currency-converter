#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    PKR: 1,
    EUR: 0.0034,
    GBP: 0.0029,
    INR: 0.30,
    USD: 0.0036,
    SAR: 0.013,
    AFN: 0.26,
    KRW: 4.99,
    IDR: 58.04,
    JPY: 0.55,
    IRR: 150.69,
    IQD: 4.71
};
let user_answer = await inquirer.prompt([{
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["PKR", "EUR", "GBP", "INR", "USD", "SAR", "AFN", "KRW", "IDR", "JPY", "IRR", "IQD"]
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["PKR", "EUR", "GBP", "INR", "USD", "SAR", "AFN", "KRW", "IDR", "JPY", "IRR", "IQD"]
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number"
    }]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(Math.round(convertedAmount));
