const marks = 82;
if(marks >= 90)
    console.log("A");
else if (marks >=75 )
    console.log("B");
else
    console.log("C");

for(let i=1 ;i<=5;i++)
    console.log(i);


const skills=['java','sql','mern','python'];

for(const sk of skills)
    console.log(sk);


const person ={name :"gopal", city :"Hyderabad"};
for(const per in person)
    console.log(per,person[per]);