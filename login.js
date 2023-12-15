 //login Status
let loggedIn = false;

//How the login popup will toggle between login and registration

const wrapper = document.querySelector('.wrapper');
const loginpopup = document.querySelector('.loginpopup');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const loginclose = document.querySelector('.icon-close');

loginpopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
})

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
})

loginclose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
})


// Check Whether Registration is successful and open login form, if not open registration form again

const alert = document.querySelector('.alert');

var urlParams = new URLSearchParams(window.location.search);
var registeredParam = urlParams.get("registered");
if (registeredParam === "true") {
    //showConfirm();
    showAlert(alert, "Registration successful! Please proceed with Login.");
    wrapper.classList.add('active-popup');
}
if (registeredParam === "false") {
    showAlert(alert, "Email already registered. Please use a different email.");
    wrapper.classList.add('active-popup');
    wrapper.classList.add('active');
}


// Check Whether Login is successful, If not open login form and if login is successfull set loggedIn = true

if (registeredParam === "logintrue") {
    showAlert(alert, "Login successful!");
    loggedIn = true;
}

if (registeredParam === "loginfalse") {
    showAlert(alert, "Invalid credentials! Please Login again");
    wrapper.classList.add('active-popup');
}


// Profile.js this pops up the profile-popup, if user is logged in otherwise opens login form with an alert msg

const profilepopup = document.querySelector('.profile-popup');
const profileicon = document.querySelector('.profile-icon');

profileicon.addEventListener('click', () => {
    if (loggedIn) {
        // profilepopup.classList.add('active');
        const usernameParam = urlParams.get("username");
        const usernameElement = document.querySelector('.username');
        const usernameicon = document.querySelector('.user-initial-icon');
        usernameElement.textContent = usernameParam;
        usernameicon.textContent = usernameParam['0'];
        if (profilepopup.classList.contains('active')) {
            profilepopup.classList.remove('active');
        } 
        else {
            profilepopup.classList.add('active');
        }        
    } 
    else {
        showAlert(alert, "Please login to access your profile. Or Register if you don't have an account");
        wrapper.classList.add('active-popup');
    }
});


function showAlert(div, msg) {
    div.classList.add("active");
    div.textContent = msg;
    setTimeout(function () {
        div.remove();
    }, 4000);
}

