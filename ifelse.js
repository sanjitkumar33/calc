//test for even number
var a = 10;
if(a%2==0){
    console.log(`${a} is even`)
}else{
    console.log(`${a} is odd`)
}

//test for odd number
var a = 11;
if(a%2==0){
    console.log(`${a} is even`)
}else{
    console.log(`${a} is odd`)
}

//test for elseif
var a = 9;
if(a%2==0){
    console.log(`${a} is even`)
}else if(a%3==0){
    console.log(`${a} is divisible by 3`)
}else{
    console.log(`${a} is odd`)
}

//test for else
var a = 5;
if(a%2==0){
    console.log(`${a} is even`)
}else if(a%3==0){
    console.log(`${a} 3 is not divisible by 5`)
}else{
    console.log(`${a} is odd`)
}

//ternary operator

var a = 10;
a>10 ? "Hii":"Bii"

var a = 10;
a==10 ? "Hii":"Bii"

var a = 10;
a>10 ? a+1:a-1