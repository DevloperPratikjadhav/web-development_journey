//Functions
function hello(){
    console.log("Hello");
}

hello();

function printName(){
    console.log("Code With Beliefs");
    console.log("Pratik Jadhav");
}
printName();

function print1to5(){
    for(i=1;i<5;i++){
        console.log(i);
    }
}
print1to5();


function eligibleForVote(){
    age=18;
    if(age<18){
        console.log("Not Eligible For Voting");
    }else{
        console.log("Eligible For Vote");
    }
}
eligibleForVote();

//function with arguments.

function print_Name(name){
    console.log(name);
}

print_Name("Code with belifs");
print_Name("Aman");

function printInfo(name,age){
    console.log(`${name}'s age is ${age}.`);
}

printInfo("Karan",21);

