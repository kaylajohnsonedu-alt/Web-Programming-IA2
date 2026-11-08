// Fetch Form Elements
let formMessage = document.getElementById("form-message");
let userForm = document.getElementById("user-form");
let userName = document.getElementById("user-name");
let userEmail = document.getElementById("user-email");
let userGitHub = document.getElementById("user-github");
let userAvatar = document.getElementById("user-avatar");
let addUser = document.getElementById("btnAddUser");


userName.addEventListener("focusout", function() {
   // Name Validation (Ensure there are no numbers in user's name)
   let nameRegex = /[^0-9]/;
   if (userName.value.trim() == "") {
      formMessage.innerHTML = "Full Name is required!";
      userName.focus();
   } else if (userName.value.trim().length < 5) {
      formMessage.innerHTML = "Name must be at least 5 characters!";
      userName.focus();
   } else if (!nameRegex.test(userName.value.trim())) {
      formMessage.innerHTML = "Name cannot contain numbers!";
      userName.focus();
   } else {
      formMessage.innerHTML = "";
   }
});

userEmail.addEventListener("focusout", function() {
   // Email Validation (Standard email regex)
   let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (userEmail.value.trim() == "") {
      formMessage.innerHTML = "Email address is required!";
      userEmail.focus();
   } else if (!emailRegex.test(userEmail.value.trim())) {
      formMessage.innerHTML = "Please enter a valid email address!";
      userEmail.focus();
   } else {
      formMessage.innerHTML = "";
   }
});

userGitHub.addEventListener("focusout", function() {
   // GitHub User Validation (Ensure that @ symbol is at the beginning of the GitHub User Tag)
   let githubRegex = /^@/;
   if (userGitHub.value.trim() == "") {
      formMessage.innerHTML = "GitHub User Tag is required!";
      userGitHub.focus();
   } else if (!githubRegex.test(userGitHub.value.trim())) {
      formMessage.innerHTML = "Please enter a valid GitHub User Tag!";
      userGitHub.focus();
   } else {
      formMessage.innerHTML = "";
   }
});

userAvatar.addEventListener("focusout", function() {
   // File Validation (Ensure only image types (JPEG/PNG) can be uploaded)
   let allowedExtensions = /(\.jpeg|\.jpg|\.png)$/i;
   let filePath = userAvatar.value;

   // Check if the user actually selected a file
   if (userAvatar.files.length == 0) {
      formMessage.innerHTML = "Avatar file upload is required!";
      userAvatar.focus();
   } else if (userAvatar.size > 512000) {
      formMessage.innerHTML = "Maximum file size of 500KB exceeded!";
      userAvatar.focus();
   } else if (!allowedExtensions.exec(filePath)) {
      formMessage.innerHTML = "Invalid file type!";
      userAvatar.focus();
   } else {
      formMessage.innerHTML = "";
   }

});




function validateInputs() {

   formMessage.innerHTML = ""

   if (userName.value.trim() == "" || userEmail.value.trim() == "" || userGitHub.value.trim() == "" || userAvatar.value.trim() == "") {

      if(userName.value.trim() == "") {
         userName.focus();
      }

      if(userEmail.value.trim() == "") {
         userEmail.focus();
      }

      if(userGitHub.value.trim() == "") {
         userGitHub.focus();
      }

      userForm.addEventListener('submit', function(event) {
         // Prevent the default browser refresh behavior and clearing form values 
         event.preventDefault();
      });

   } else {

      // Retrieve data from localStorage and parse into an array
      let data = JSON.parse(localStorage.getItem("profile")) || [];

      // Add current form data to array
      data.push({name:userName.value,email:userEmail.value,github:userGitHub.value,avatar:userAvatar.value});

      // Save updated data to localStorage
      localStorage.setItem("profile", JSON.stringify(data));

      userForm.action = "ticket.html";
      userForm.method = "POST"; 
      userForm.submit();
   }

}