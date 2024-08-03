
            // Import the functions you need from the SDKs 
            import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
            import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
            import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
            // TODO: Add SDKs for Firebase products that you want to use
            // https://firebase.google.com/docs/web/setup#available-libraries
          
            // Your web app's Firebase configuration
            // For Firebase JS SDK v7.20.0 and later, measurementId is optional
            const firebaseConfig = {
              apiKey: "",
              authDomain: "",
              projectId: "",
              storageBucket: "",
              messagingSenderId: "",
              appId: "",
              measurementId: ""
            };
          
            // Initialize Firebase
            const app = initializeApp(firebaseConfig);
            const auth = getAuth(app);
            const analytics = getAnalytics(app);

            export { app, auth };
          
