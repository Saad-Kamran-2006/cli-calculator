#! /usr/bin/env node
import { log } from "console";
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
//stop function:
const stop = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
//Animation function:
async function animation() {
    let text_Animation = chalkAnimation.rainbow(`~Let's Start Calculation~`);
    await stop(); //stop function call
    text_Animation.stop(); //text_Animation function call
    let cal_Logo = chalkAnimation.rainbow(`     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`);
    await stop(); //stop function call
    cal_Logo.stop(); //cal_Logo function call 
}
;
await animation(); //animation function call
//calculator function:
let calculate = async () => {
    //User's method choice by inquirer.prompt
    let operator = await inquirer.prompt([
        {
            name: "choice",
            type: "list",
            message: chalk.yellow("\n Choose Method \n"),
            choices: ["+ Addition", "- Subtraction", "* Multiplication", "/ Division", "^ Power"]
        }
    ]);
    //User's First_Number choice by inquirer.prompt
    let first_Num = await inquirer.prompt([
        {
            name: "number",
            type: "number",
            message: chalk.yellow("Enter Your First_Number")
        }
    ]);
    //User's Second_Number choice by inquirer.prompt
    let second_Num = await inquirer.prompt([
        {
            name: "number",
            type: "number",
            message: chalk.yellow("Enter Your Second_Number")
        }
    ]);
    if (operator.choice === "+ Addition") {
        log(chalk.rgb(36, 113, 163)(`${first_Num.number} + ${second_Num.number} = ${first_Num.number + second_Num.number}`));
    }
    else if (operator.choice === "- Subtraction") {
        log(chalk.rgb(36, 113, 163)(`${first_Num.number} - ${second_Num.number} = ${first_Num.number - second_Num.number}`));
    }
    else if (operator.choice === "* Multiplication") {
        log(chalk.rgb(36, 113, 163)(`${first_Num.number} * ${second_Num.number} = ${first_Num.number * second_Num.number}`));
    }
    else if (operator.choice === "/ Division") {
        log(chalk.rgb(36, 113, 163)(`${first_Num.number} / ${second_Num.number} = ${first_Num.number / second_Num.number}`));
    }
    else if (operator.choice === "^ Power") {
        log(chalk.rgb(36, 113, 163)(`${first_Num.number} ^ ${second_Num.number} = ${first_Num.number ** second_Num.number}`));
    }
    ;
};
//Continue function:
async function Continue() {
    do {
        await calculate();
        //User want to continue or not by inquirer.prompt
        var again = await inquirer.prompt([
            {
                name: "restart",
                type: "input",
                message: chalk.yellow("Do you want to continue? Press y or n:")
            }
        ]);
    } while (again.restart == "y" || again.restart == "Y" || again.restart == "yes" || again.restart == "YES");
}
;
Continue(); //Continue function call
