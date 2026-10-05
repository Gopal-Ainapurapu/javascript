for(let i=1;i<=20;i++){
    if(i%3==0 && i%5==0)
        console.log("Fizzbuzz");
    else if (i%3==0)
        console.log("fizz");
    else if (i%5==0)
        console.log("buzz");
    else
        console.log(i)
}

// let num = prompt("enter the number");
// const n = number(num);
// if(num%2===0)
//     console.log("even number");
// else
//     console.log("odd number");


const readline = require("readline");
const rl = readline.createInterface({input : process.stdin, output: process.stdout});

rl.question("enter the number :",(answer)=>{
    const num = Number(answer);
    if(answer.trim()===""|| Number.isNaN(num)){
        console.log("please enter the valid number");
    }
    else{
        console.log(num%2===0?"even number":"odd number");
    }
    rl.close();
})