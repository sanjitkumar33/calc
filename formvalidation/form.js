function validateFname(){
    let fname = document.getElementById('fname').value;
    let fout = document.getElementById('fout');
    let fdiv = document.getElementById('fdiv')
    if(fname.trim().length == 0){
        fout.innerText = "please Enter First Name"
        fdiv.classList.add(has-error)
    }else{
        fout.innerText = ""
        fdiv.classList.remove('has-error')
        fdiv.classList.add('has-success')
    }
}
const validateEmail = () =>{
    let email = document.getElementById('mail').value;
    let eout = document.getElementById('eout');
    if(email.trim().length == 0){
        eout.innerText = "Please enter Email";
    }else{
        
        if(email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$") ==null){
            eout.innerText = "Please Enter valid Email";
            
        }else{
            eout.innerText = ""
            
        }
            
    }
}