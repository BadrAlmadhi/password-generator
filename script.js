// assign varibles
var generateBtn = document.querySelector("#generate");
// allow the user to choose at least on of 4 types of chars - lowercase, uppercase, numbers, letters
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "1234567890";
var symbols = ".,/;'[]{}|:<>?~!@#$%^&*()_+";
var finalCharactersArray = [];

// ask user to choose password length
// if the user doesn't choose a char type (min) alert and dont run the rest of the app
// when the user makes their choice, push all of the chosen characters into a array, and generate password

function generatePassword() {
  var userInput = prompt(
    "Please choose a password between 8 and 128 characters."
  );

  // convert whatever the user inputs to a number
  var passwordLength = parseInt(userInput, 10);

  // handle error when user inputs text or number not matching criteria
  if (passwordLength < 8 || passwordLength > 128 || !passwordLength) {
    return alert("Your chose password length does not match the criteria");
  }

  var wantsLowercase = confirm(
    "Do you want your password to contain lowercase characters?"
  );
  var wantsUppercase = confirm(
    "Do you want your password to contain uppercase characters?"
  );

  // var wantsNumbers
  var wantNumbers = confirm("Do you want your password to contain numbers?");
  // var wantsSymbols

  var wantsSymbols = confirm("Do you want your password to contain symbols?");

  // add the wantsNumbers and wantsSymbols to the if statement below with an && sign
  if (!wantsLowercase && !wantsUppercase) {
    alert("Please choose at least one type of characters");
  }

  if (wantsLowercase) {
    // add the characters to the final array
    finalCharactersArray.push(...lowerCase);
  }

  if (wantsUppercase) {
    // add the characters to the final array
    finalCharactersArray.push(...upperCase);
  }

  if (wantNumbers) {
    finalCharactersArray.push(...number);
  }

  if (wantsSymbols) {
    finalCharactersArray.push(...symbols);
  }
  // iterate through the final characters array and choose random character for as manytimes as the password length
  for (var i = 0; i < passwordLength; i++) {
    var password = password[Math.floor(Math.random() * password)];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
