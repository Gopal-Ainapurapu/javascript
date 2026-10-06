function add( a, b){
    return a+b;

}


const mutiply = function(a, b){
    return a*b;
};

const subtract = (a, b) => a-b;

const square =(x) => x*x;
const square2 = x => x*x;
const greet = () =>"hello";
const makeusr=(name)=>({name});
const logandadd=(a,b)=>{
    console.log("adding");
    return a+b;
};



function show(a, b){
    console.log(a, b);
}
show(1);
show(1,2,3);


//default parameters

function greeet(name ="gopal", greeting ="hello"){
    return `${greeting}, ${name}`;
}

console.log(greeet());
console.log(greeet("gopi"));
console.log(greeet("","welcome"));


//rest parameters 

function sum(...numbers){
    let total =0;
    for(const n of numbers)
        total +=n;
    return total;
}

console.log(sum(1,2,3,4,5,5));

//spread

const numsm =[5,6,4];
console.log(Math.max(...numsm));


function noreturn(){
    console.log("hiiii");
}
console.log(noreturn());
