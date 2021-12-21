
const user = prompt("What id your name?");
const subject = prompt("Which subject's score do you want to know");

const examScore = Math.floor(Math.random() * 100) + 1 ;

if(examScore >= 80){
    alert(`Congrets,${user} !! Your exam score in ${subject} is ${examScore}.Wish you get in real life`)
}else if(examScore >= 60){
    alert(`Not Bad,${user} !! Your exam score in ${subject} is ${examScore}.
    Wish you get higher`)
}else if(examScore >= 40){
    alert(`At least you passed,${user} !! Your exam score in ${subject} is ${examScore}
    try harder`)
}else{
    alert(`At least you passed,${}
}