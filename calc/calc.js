//addition part of javascript
function add(){
    let a = document.getElementById('first').value;
    let b = document.getElementById('second').value;
    let out = Number(a)+Number(b)
    document.getElementsByClassName('output')[0].innerText=`sum of number is ${out}`
}
//substraction part of javascript
function sub(){
    let a = document.getElementById('first').value;
    let b = document.getElementById('second').value;
    let out = Number(a)-Number(b)
    document.getElementsByClassName('output')[0].innerText=`sub of number is ${out}`
}
//muultiplication part of javascript
function mul(){
    let a = document.getElementById('first').value;
    let b = document.getElementById('second').value;
    let out = Number(a)*Number(b)
    document.getElementsByClassName('output')[0].innerText=`mul of number is ${out}`
}
//division part of javascript
