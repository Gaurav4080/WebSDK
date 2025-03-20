// script.js

// Add event listeners for form submissions
document.addEventListener('DOMContentLoaded', () => {
    // Login form validation
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', function(event) {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
  
        if (username === '' || password === '') {
          event.preventDefault(); // Prevent form submission
          alert('Please fill in both fields');
        }
      });
    }
  
    // Register form validation
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
      registerForm.addEventListener('submit', function(event) {
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
  
        // Simple email validation using regex
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
        if (username === '' || email === '' || password === '') {
          event.preventDefault(); // Prevent form submission
          alert('Please fill in all fields');
        } else if (!emailRegex.test(email)) {
          event.preventDefault();
          alert('Please enter a valid email address');
        }
      });
    }
  });
  