// Assignment Code
var generateBtn = document.querySelector("#generate");


// I have assigned all the characters needed to create a safe and sure password
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var loweCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = ['1','2','3','4','5','6','7','8','9'];
var symbols = ['!','@','#','$','%','^','&'];
var newPassword = [];


function generatePassword () {

  // I have chosen the prompt for the user to choose the password length from 8 to 128
  var userInput = prompt("Please choose the password length from 8 to 128")
  // I have assigned password length and parseInt to get exact number of the password length
      var passwordLength = parseInt(userInput, 10);
      //console.log(passwordLength);

      // the if statement is used to check if user interned the correct value
      if (passwordLength < 8 || passwordLength > 128 || !passwordLength) {
        alert("Your password length is not correct, please inter password length from 8 to 128");
      }

      // this all the question you will be asked to create a password what ever you like you just need to confirm it 
      var wantUpperCase = confirm("Do you want to add upper case letter to your password?");
      var wantLowerCase = confirm("Do you want to add lower case to your password?");
      var wantNumbers = confirm("Do you want to add a number to your password?");
      var wantSymbols = confirm("Do you want to add symbols to your password?");

// if user did not choose any character the alert will notify they to choose at lease one character
      if (!wantUpperCase && !wantLowerCase && !wantNumbers && !wantSymbols) {
        alert("Please at lease you have to choose one character")
      }
      // if statement to create what the user confirmed 
      // I used the '...' below to spread the arrays to values
      if (wantUpperCase) {
        newPassword.push(...upperCase);
      } 

      if (wantLowerCase) {
        newPassword.push(...loweCase);
      }

      if (wantNumbers) {
        newPassword.push(...numbers);
      }

      if (wantSymbols) {
        newPassword.push(...symbols);
      }
      console.log(newPassword);

      // iterate through the final characters array and choose random character for user
      var passwordCharacter = [];

      for (var i = 0; i < passwordLength; i++) {
        var password = newPassword [
          Math.floor(Math.random() * newPassword.length)
        ];

        passwordCharacter.push(password);
      }

      return passwordCharacter.join("");

  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
