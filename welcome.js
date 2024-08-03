import { auth } from './firebase.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

document.addEventListener('DOMContentLoaded', () => {
    const emailElement = document.querySelector('email-id');
    const logoutButton = document.querySelector('.btn-danger');

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in
            emailElement.textContent = user.email;
        } else {
            // User is signed out, redirect to login page
            window.location.href = 'index.html'; 
        }
    });

    logoutButton.addEventListener('click', () => {
        signOut(auth).then(() => {
           
            window.location.href = 'index.html'; // Redirect to login page after logout

        }).catch((error) => {
            
            console.error('Sign out error:', error);

        });
    });
});