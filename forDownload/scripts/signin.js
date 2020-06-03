const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const signcontainer = document.getElementById('signcontainer');

signUpButton.addEventListener('click', () =>{
    signcontainer.classList.add('right-panel-active')
});

signInButton.addEventListener('click', () =>{
    signcontainer.classList.remove('right-panel-active')
} );