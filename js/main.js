
/////////////////////////////////////////////////////////////////////
// TO STORE THE FORM INPUT VALUES IN THR FORM DETAILS OBJECT
/////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////
// TO STOP THE SUBMIT BUTTON FROM AUTOMATICALLY REFRESHING THE PAGE  
/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////
// TO SEND THE CONTACT FORM TO MY MAIL  
/////////////////////////////////////////////////////////////////////

// const submitBtn = document.querySelector("#submit-btn");
// submitBtn.addEventListener('click',sendEmail);

const form = document.querySelector('form')
form.addEventListener('submit', (e) => sendEmail(e))

function sendEmail (e) {
    e.preventDefault()
    Email.send({
        SecureToken : "283f0bcf-76b6-4123-a403-d0c573f31fe4",
        // Host: "smtp.gmail.com",
        // username: "hightargetweb@gmail.com",
        // password: "Heritage4lyf",
        To : "hightargetweb@gmail.com",
        From : document.querySelector("#email").value,
        Subject : "New contact form enquiry",
        Body : "name:" + document.querySelector("#name").value
        + "Mail" + document.querySelector("#email").value
        + "message:" + document.querySelector("#message").value
    }).then(
    message => alert("Thanks, Your Message has been sent")
    );
}

/////////////////////////////////////////////////////////////////////
// FOR THE PRELOADER  
/////////////////////////////////////////////////////////////////////

 window.addEventListener('load', () => {
    const preloader = document.querySelector('#preloader')
     preloader.style.display = "none"
 })

/////////////////////////////////////////////////////////////////////
// FOR THE AUTO AUTO TYPE ON TYPE JS 
/////////////////////////////////////////////////////////////////////
var typed = new Typed('.typed-words', {
strings: ["Ethusiastic Dev😎","React Developer💻","UI/UX Designer📱"],
typeSpeed: 80,
backSpeed: 80,
backDelay: 4000,
startDelay: 1000,
loop: true,
showCursor: false
});

/////////////////////////////////////////////////////////////////////
// TO OPEN AND CLOSE MY HAMBURGER MENU
/////////////////////////////////////////////////////////////////////
const mainMenu = document.querySelector('.mainMenu')
const openMenu = document.querySelector('.openMenu')
const closeMenu = document.querySelector('.closeMenu')

openMenu.addEventListener('click', open)

function open(){
    mainMenu.style.display="flex";
    mainMenu.style.top = '0';

}

closeMenu.addEventListener('click', close)

function close (){
    mainMenu.style.top="-100%"
}

/////////////////////////////////////////////////////////////////////
// TO USE THE SMOOTH SCROLL JS
/////////////////////////////////////////////////////////////////////


var scroll = new SmoothScroll('nav .mainMenu a[href*="#"]', {
    speed: 500
});
/////////////////////////////////////////////////////////////////////
// Form validation
/////////////////////////////////////////////////////////////////////
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
// const form = document.querySelector('form');
const submitBtn = document.querySelector('#submit-btn');
const nameErr = document.querySelector('.name-error');
const emailErr = document.querySelector('.mail-error');
const msgErr = document.querySelector('.msg-error');


// form.addEventListener('submit', (e) => {
    
// })

name.addEventListener('input', () => {
    if(name.value.trim().length >= 5){
        nameErr.innerText = '';
        
    }
    else if(name.value === ''){
        nameErr.innerText = '';
    }
    else{
        submitBtn.disabled = true;
        nameErr.innerText = 'name must be at least 5 characters'
    }  
})
email.addEventListener('input', () => {
    if(email.value.endsWith('.com')){
        emailErr.innerText = '';
        
    }
    else if(email.value === ''){
        emailErr.innerText = '';
    }
    else{
        submitBtn.disabled = true;
        emailErr.innerText = 'Email must end with .com'
    }  
})
message.addEventListener('input', () => {
    if(message.value.trim().length >= 15){
        msgErr.innerText = '';
        submitBtn.disabled = false;
    }
    else if(message.value === ''){
        msgErr.innerText = '';
    }
    else{
        submitBtn.disabled = true;
        msgErr.innerText = 'message must contain at least 15 characters'
    }  
})














