const isEven=(x)=> x%2===0?"even":"odd";

function gret(name,greeting="hello"){
    return `${name}, ${greeting}`;
}

gret("gopal");
gret("gopi","welcome");function gret(name,greeting="hello"){
    return `${name}, ${greeting}`;
}

console.log(gret("gopal"));
console.log(gret("gopi","welcome"));


function average(...nums){
    if(nums.length===0){
        return 0;
    }
    let avg=0,cnt=0,total=0;
    for(const n of nums){
        cnt++;
        total+=n;
    }
    avg= total/cnt;
    return avg;
}
console.log(average(2, 4, 6));   // 4
console.log(average(10));        // 10
console.log(average());          // 0
console.log(average(1, 2));      // 1.5
console.log(average(-4, 4));     // 0
