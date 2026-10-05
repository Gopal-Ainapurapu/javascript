const sentence="hello welcome to java script";

const vow="aeiou";

let vcnt=0
let ccnt=0;

for(const ch of sentence.toLowerCase()){
    if(vow.includes(ch)){
        vcnt++;
    }
    else{
    ccnt++
    }
}
console.log(`vowels : ${vcnt}`);
console.log(`consonants are ${ccnt}`);