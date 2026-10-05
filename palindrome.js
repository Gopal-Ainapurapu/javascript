

const word="level";
const  wrd = word.split("").reverse().join("");

if(word === wrd){
    console.log(`given string is palindrome ${wrd}`);

}else{
    console.log(`${word} is not a palindrome `);
}


//Better version that ignores case and spaces, so "Race car" also works:


const txt = "Race car";
const cle= txt.toLowerCase().replaceAll(" ","");
const ispalin = cle ===cle.split("").reverse().join("");
console.log(ispalin?"palindrome ":"not a palindrome");


//Alternative with a loop (no extra array, and a common interview version):


function ispalindrome(str){
    let left=0;
    let right = str.length-1;
    while(left <right){
        if(str[left]!==str[right])
            return false;
        left++;
        right--;
    }
    return true;
}

console.log(ispalindrome("level"));
console.log(ispalindrome("hello"));