//THIS IS JS FILE THAT CONTAINING JavaScript CODE . 

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const signcontainer = document.getElementById('signcontainer');

signUpButton.addEventListener('click', () =>{
    signcontainer.classList.add('right-panel-active')
});

signInButton.addEventListener('click', () =>{
    signcontainer.classList.remove('right-panel-active')
} );

//JS FILES ARE REFERENCED BY WEB PAGES THAT INCORPORATE JavaScript FUNCTIONS.