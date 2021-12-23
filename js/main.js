
/////////////////////////////////////////////////////////////////////
// TO STORE THE FORM INPUT VALUES IN THE FORM DETAILS OBJECT
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



/////////////////////////////////////////////////////////////////////
// TO SEND THE CONTACT FORM TO MY MAIL  
/////////////////////////////////////////////////////////////////////

// const submitBtn = document.querySelector("#submit-btn");
// submitBtn.addEventListener('click',sendEmail);

// function sendEmail () {
//     Email.send({
//         // SecureToken : "48a06d0a-42d9-49f8-900e-e41f72c16826",
//         Host: "smtp.gmail.com",
//         username: "hightargetweb@gmail.com",
//         password: "Heritage4lyf",
//         To : "adeoyegodsheritage@gmail.com",
//         From : document.getElementById("mail").value,
//         Subject : "New contact form enquiry",
//         Body : "name:" + document.getElementById("name").value
// //         + "Mail" + document.querySelector("#mail").value
// //         + "Phone number:" +  document.querySelector("#phone").value
// //         + "website:" + document.querySelector("#website").value
// //         + "message:" + document.querySelector("#text").value
//     }).then(
//     message => alert("Thanks, Your Message has been sent")
//     );
// }
function sendEmail () {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "hightargetweb@gmail.com",
        Password : "Heritage4lyf",
        To : 'adeoyegodsheritage@gmail.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

/////////////////////////////////////////////////////////////////////
// PRELOADER  
/////////////////////////////////////////////////////////////////////

window.addEventListener('load', () => {
    const preloader = document.querySelector('#preloader')
    preloader.style.display = "none"
})





