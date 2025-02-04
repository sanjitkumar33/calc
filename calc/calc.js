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
function div(){
    let a = document.getElementById('first').value;
    let b = document.getElementById('second').value;
    if (Number(b) ===0){
        document.getElementsByClassName('output')[0].innerText = "cannot divide by zero!";
    }else{
        let out = Number(a)/Number(b);
        document.getElementsByClassName('output')[0].innerText = `Division of numbers is ${out}`;

    }
}
//clear fields parts of javascript
function clearFields(){
    document.getElementById('first').value = '';
    document.getElementById('second').value = '';
    document.getElementsByClassName('output')[0].innerText = '';
}
