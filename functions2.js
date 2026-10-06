//callbacks passing funsctions as arguments

function repeat(times, action){
    for(let i=0;i<times;i++){
        action(i);
    }
}

repeat(3,(i)=> console.log("run",i));

const nums=[1,2,3];
nums.forEach((n)=> console.log(n*2));
setTimeout(()=> console.log("after 1 second"), 1000);


///function with return functions

function makemutiply(factor){
    return (number)=> number* factor;
}

const db = makemutiply(2);
const trp= makemutiply(3);


console.log(db(5));
console.log(trp(5));
