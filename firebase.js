
            // Import the functions you need from the SDKs 
            import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
            import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
            import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
            // TODO: Add SDKs for Firebase products that you want to use
            // https://firebase.google.com/docs/web/setup#available-libraries
          
            // Your web app's Firebase configuration
            // For Firebase JS SDK v7.20.0 and later, measurementId is optional
            const firebaseConfig = {
              apiKey: "AIzaSyDycQ0qWOgkdTokRK5fXw1UrE0pd9-3zNo",
              authDomain: "fir-auth-5f83f.firebaseapp.com",
              projectId: "fir-auth-5f83f",
              storageBucket: "fir-auth-5f83f.appspot.com",
              messagingSenderId: "847642748695",
              appId: "1:847642748695:web:99abf76e77a44079aab952",
              measurementId: "G-QWPFLVSSTJ"
            };
          
            // Initialize Firebase
            const app = initializeApp(firebaseConfig);
            const auth = getAuth(app);
            const analytics = getAnalytics(app);

            export { app, auth };
          