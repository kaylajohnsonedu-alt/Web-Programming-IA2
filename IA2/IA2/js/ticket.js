// Fetch Page Elements
let userName1 = document.getElementById("user-name1");
let userName2 = document.getElementById("user-name2");
let userEmail = document.getElementById("user-email");
let userGitHub = document.getElementById("user-github");
let userAvatar = document.getElementById("user-avatar");


// Load stored data when document body is loaded
document.body.onload = function() { displayStoredData(); };


function displayStoredData() {
   // Retrieve and parse data
   let data = JSON.parse(localStorage.getItem("profile"));

   if (data != null) {
      let profileText = "<table><thead><tr><td> <b>#</b> </td><td> <b>Full Name</b> </td><td> <b>Email Address</b> </td></tr></thead><tbody>";
      // Looping through the array
      for (let i = 0; i < data.length; i++) {
         profileText += "<tr><td>" + (i+1) + "</td><td>" + data[i].name + data[i].github + data[i].avatar + " </td><td>" + data[i].email + "</td></tr>";
         userName1.innerHTML = data[i].name;
         userName2.innerHTML = data[i].name;
         userEmail.innerHTML = data[i].email;
         userGitHub.innerHTML = data[i].github;
      }

   profileText += "</tbody></table>";
   //profileData.innerHTML = profileText;

   



   }
   else
   {
      profileData.innerHTML = "NO DATA";
   }
};