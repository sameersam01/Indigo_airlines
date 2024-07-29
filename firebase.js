// Import and initialize Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfhxyxk_4W1fM3xL-Z7ewZ8_syagP4UhQ",
  authDomain: "indigo-216b7.firebaseapp.com",
  databaseURL: "https://indigo-216b7-default-rtdb.firebaseio.com",
  projectId: "indigo-216b7",
  storageBucket: "indigo-216b7.appspot.com",
  messagingSenderId: "580506773031",
  appId: "1:580506773031:web:55a4762c284d15d3179002"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.addEventListener('DOMContentLoaded', function() {
  const notifyEmail = document.getElementById('notify-email');
  const notifyBtn = document.getElementById('notify-button');

  notifyBtn.addEventListener('click', function() {
    const email = notifyEmail.value.trim();
    if (email) {
      writeUserData(email);
    } else {
      alert('Please enter a valid email address.');
    }
  });

  function writeUserData(email) {
    set(ref(db, 'users/' ), { // Set data to the Realtime Database
      email: email
    })
    .then(() => {
      console.log('Data saved successfully!');
      alert('You have been notified successfully.');
    })
    .catch((error) => {
      console.error('Error saving data:', error);
      alert('There was an error saving your email.');
    });
  }
});
