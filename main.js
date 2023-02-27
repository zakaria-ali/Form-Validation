var form = document.querySelector(".myForm");
var firstName = document.querySelector(".firstName");
var lastName = document.querySelector(".lastName");
var email = document.querySelector(".email");
var password = document.querySelector(".password");
var containers = document.querySelectorAll("div");
var fnFlageCreator = true;
var lnFlageCreator = true;
var emFlageCreator = true;
var emFlageValid = true;
var pssFlageCreator = true;
firstName.addEventListener("blur",()=>{
    if (firstName.value === "") {
                if(fnFlageCreator){
                    var par = document.createElement('p');
                    par.className = "fnerror";
                    par.appendChild(document.createTextNode("Please enter your First Name"))
                    containers[0].appendChild(par);
                    firstName.style.border = "1px solid red";
                }
                flage = false;
                fnFlageCreator = false;
            }
    });
// Ends of first name validation.
lastName.addEventListener("blur",()=>{
    if (lastName.value === "") {
        if(lnFlageCreator){
            var par = document.createElement('p');
            par.className = "lnerror";
            par.appendChild(document.createTextNode("Please enter your Last Name"))
            containers[1].appendChild(par);
            lastName.style.border = "1px solid red";
        }
        flage = false;
        lnFlageCreator = false;
    }
});
// Ends of last name validation.
email.addEventListener("blur",()=>{
    var atpos = email.value.indexOf("@");
    var dotpos = email.value.lastIndexOf(".");
    if (email.value === "") {
                if(emFlageCreator){
                    var par = document.createElement('p');
                    par.className = "emerror";
                    par.appendChild(document.createTextNode("Please enter your Email"))
                    containers[2].appendChild(par);
                    email.style.border = "1px solid red";
                }
                flage = false;
                emFlageCreator = false;
            }
            else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.value.length) {
                    if(emFlageCreator){
                        var par = document.createElement('p');
                        par.className = "emerror";
                        par.appendChild(document.createTextNode("Please enter a vaild Email"))
                        containers[2].appendChild(par);
                        email.style.border = "1px solid red";
                    }
                flage = false;
                emFlageCreator = false;
                }
});
// Ends of email validation.
password.addEventListener("blur",()=>{
    if (password.value === "") {
                if(pssFlageCreator){
                    var par = document.createElement('p');
                    par.className = "psserror";
                    par.appendChild(document.createTextNode("Please enter your Password"))
                    containers[3].appendChild(par);
                    password.style.border = "1px solid red";
                }
                flage = false;
                pssFlageCreator = false;
            }
            else if (password.value.length < 8) {
                if(pssFlageCreator){
                    var par = document.createElement('p');
                    par.className = "psserror";
                    par.appendChild(document.createTextNode("Password must be 8 characters at least"))
                    containers[3].appendChild(par);
                    password.style.border = "1px solid red";
                }
                flage = false;
                pssFlageCreator = false;
            }
            else if (!/[A-Z]/.test(password.value)) {
                if(pssFlageCreator){
                    var par = document.createElement('p');
                    par.className = "psserror";
                    par.appendChild(document.createTextNode("Please enter one capital letter at least"))
                    containers[3].appendChild(par);
                    password.style.border = "1px solid red";
                }
                flage = false;
                pssFlageCreator = false;
            }
            else if (!/[a-z]/.test(password.value)) {
                if(pssFlageCreator){
                    var par = document.createElement('p');
                    par.className = "psserror";
                    par.appendChild(document.createTextNode("Please enter one small letter at least"))
                    containers[3].appendChild(par);
                    password.style.border = "1px solid red";
                }
                flage = false;
                pssFlageCreator = false;
            }
            else  if (!/\d/.test(password.value)) {
                if(pssFlageCreator){
                    var par = document.createElement('p');
                    par.className = "psserror";
                    par.appendChild(document.createTextNode("Please enter one digit at least"))
                    containers[3].appendChild(par);
                    password.style.border = "1px solid red";
                }
                flage = false;
                pssFlageCreator = false;
            }
            else if (!/\W/.test(password.value)) {
                if(pssFlageCreator){
                    var par = document.createElement('p');
                    par.className = "psserror";
                    par.appendChild(document.createTextNode("Please enter one special character at least"))
                    containers[3].appendChild(par);
                    password.style.border = "1px solid red";
                }
                flage = false;
                pssFlageCreator = false;
            }
});
// Ends of password validation.
//Validation if the user directly presses on Submit.
form.onsubmit = (e)=>{
    if (firstName.value === "" ){
        e.preventDefault();
        if(fnFlageCreator){
            var par = document.createElement('p');
            par.className = "fnerror";
            par.appendChild(document.createTextNode("Please enter your First Name"))
            containers[0].appendChild(par);
            firstName.style.border = "1px solid red";
        }
        flage = false;
        fnFlageCreator = false;
    }
    // Ends of first name validation.
    if(lastName.value === "" ){
        e.preventDefault();
        if(lnFlageCreator){
            var par = document.createElement('p');
            par.className = "lnerror";
            par.appendChild(document.createTextNode("Please enter your Last Name"))
            containers[1].appendChild(par);
            lastName.style.border = "1px solid red";
        }
        flage = false;
        lnFlageCreator = false;
    }
    // Ends of last name validation.
    if(email.value === "" ){
        e.preventDefault();
        if(emFlageCreator){
            var par = document.createElement('p');
            par.className = "emerror";
            par.appendChild(document.createTextNode("Please enter your Email"))
            containers[2].appendChild(par);
            email.style.border = "1px solid red";
        }
        flage = false;
        emFlageCreator = false;
    }
    // Ends of email validation.
    if(password.value === ""){
        e.preventDefault();
        if(pssFlageCreator){
            var par = document.createElement('p');
            par.className = "psserror";
            par.appendChild(document.createTextNode("Please enter your Password"))
            containers[3].appendChild(par);
            password.style.border = "1px solid red";
        }
        flage = false;
        pssFlageCreator = false;
    }
    // Ends of password validation.
};
//To go back to defult behavior.
const myInterval = setInterval(function () {
    if(firstName === (document.activeElement))
        if((document.querySelector(".fnerror"))){
            (document.querySelector(".fnerror")).remove();
            fnFlageCreator = true;
            firstName.style.border = "1px solid #ccc";
        }
    if(lastName === (document.activeElement))
        if((document.querySelector(".lnerror"))){
            (document.querySelector(".lnerror")).remove();
            lnFlageCreator = true;
            lastName.style.border = "1px solid #ccc";
        }
    if(email === (document.activeElement))
        if((document.querySelector(".emerror"))){
            (document.querySelector(".emerror")).remove();
            emFlageCreator = true;
            email.style.border = "1px solid #ccc";
        }
    if(password === (document.activeElement))
        if((document.querySelector(".psserror"))){
            (document.querySelector(".psserror")).remove();
            pssFlageCreator = true;
            password.style.border = "1px solid #ccc";
        }
    }
, 100);
