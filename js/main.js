
/////////////////////////////////////////////////////////////////////
// TO STORE THE FORM INPUT VALUES IN THR FORM DETAILS OBJECT
/////////////////////////////////////////////////////////////////////

const formDetails = {};
let fullName = document.querySelector("#name");
let email = document.querySelector("#mail");
let phoneNumber = document.querySelector("#phone");
let website = document.querySelector("#website");
let message = document.querySelector("#text");

for( let formInputs of [fullName , email , phoneNumber , website , message]){
    formInputs.addEventListener('input', function(e){
        formDetails[e.target.name] = this.value;
    })
}


/////////////////////////////////////////////////////////////////////
// TO STOP THE SUBMIT BUTTON FROM AUTOMATICALLY REFRESHING THE PAGE  
/////////////////////////////////////////////////////////////////////

let form = document.querySelector('.contact-form');
form.addEventListener('submit', function(e){
    e.preventDefault();
})



