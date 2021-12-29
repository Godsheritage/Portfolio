
///////////////////////////////////////////////////////////////////
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



/////////////////////////////////////////////////////////////////////
// TO SEND THE CONTACT FORM TO MY MAIL  
/////////////////////////////////////////////////////////////////////

// const submitBtn = document.querySelector("#submit-btn");
// submitBtn.addEventListener('click',sendEmail);

function sendEmail () {
    Email.send({
//         SecureToken : "48a06d0a-42d9-49f8-900e-e41f72c16826",
        Host: "smtp.gmail.com",
        username: "hightargetweb@gmail.com",
        password: "Heritage4lyf",
        To : "heritageadeoye012@gmail.com",
        From : document.querySelector("#mail").value,
        Subject : "New contact form enquiry",
        Body : "name:" + document.querySelector("#name").value
        + "Mail" + document.querySelector("#mail").value
        + "Phone number:" +  document.querySelector("#phone").value
        + "website:" + document.querySelector("#website").value
        + "message:" + document.querySelector("#text").value
    }).then(
    message => alert("Thanks, Your Message has been sent")
    );
}

/////////////////////////////////////////////////////////////////////
// PRELOADER  
/////////////////////////////////////////////////////////////////////

window.addEventListener('load', () => {
    const preloader = document.querySelector('#preloader')
    preloader.style.display = "none"
})

/////////////////////////////////////////////////////////////////////
// FOR THE AUTO TPYING ON TYPE JS 
/////////////////////////////////////////////////////////////////////
var typed = new Typed('.typed-words', {
strings: ["My name is 'Godsheritage","I am a web developer","I am a UI/UX Designer"],
typeSpeed: 80,
backSpeed: 80,
backDelay: 4000,
startDelay: 1000,
loop: true,
showCursor: false
});










