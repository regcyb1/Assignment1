var username;
var age1 ;
var password;
var cpassword;

// let password = document.getElementById("password");
// let confirmpassword = document.getElementById("confirmpassword");
// let form=document.querySelector("form");

function validate(){
    event.preventDefault();
    username= document.getElementById('name').value
    if(username === ""){
        document.getElementById('usernamemsg').innerHTML = "*required";
    }
    age1 = document.getElementById('age').value;
    if(isNaN(age1)){
        document.getElementById('agemsg').innerHTML = 'Enter valid number';
    }else{
        document.getElementById('agemsg').innerHTML = ' ';
    }

    password= document.getElementById('pwd').value;
    if(password.length < 6){
        document.getElementById('owdmsg').innerHTML = 'should be at least 6 characters long';
    }else{
        document.getElementById('owdmsg').innerHTML = 'password ok';

    }
    cpassword = document.getElementById('confirmpwd').value;
    if(password != cpassword){
        document.getElementById('notmsg').innerHTML = 'password not matched';
    }else{
        document.getElementById('notmsg').innerHTML = '  matched';

    }

}
