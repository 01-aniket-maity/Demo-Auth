import { auth } from './firebase.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const redirect = document.getElementById('Redirect');
    
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const email = loginForm.querySelector('input[type="text"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;

        
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("User signed in:", user);
                alert("Successfully signed in!");
                // Here you can redirect the user or update the UI
                window.location.href = 'welcome.html';
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Sign in error:", errorCode, errorMessage);
                alert("Error signing in: " + errorMessage);
            });
    });

    redirect.addEventListener('click',()=>{
        console.log("click");
        window.location.href='signup.html';
    });
});