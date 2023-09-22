// character types
var lowercase = "abcdefghijklmnñopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


//function to generate random password
function generatePassword() {
  var characterBank = ""; //characterBank keeps the character types
  var passwordLength = window.prompt("How many digits do you want for your password? "); //var to set a password length
  console.log(passwordLength);
  while (passwordLength <= 7 || passwordLength >= 129) {
    window.alert("Password must have between 8 to 128 digits."); //alerts the user about password length boundaries
    passwordLength = window.prompt("How many digits do you want for your password? ");
  }
  //in this part character types are chosen by the user
  var confirmUppercase = window.confirm("Confirm uppercase?");
  console.log(confirmUppercase);
  if (confirmUppercase === true) {
    characterBank = characterBank + uppercase;
  }

  var confirmLowercase = window.confirm("Confirm lowercase?");
  if (confirmLowercase === true) {
    characterBank = characterBank + lowercase;
  }

  var confirmNumbers = window.confirm("Confirm number?");
  if (confirmNumbers === true) {
    characterBank = characterBank + numbers;
  }

  var confirmSpecial = window.confirm("Confirm special?");
  if (confirmSpecial === true) {
    characterBank = characterBank + special;
  }
  //as long as the user keeps not choosing at least one character an alert will appear and the election process will start over again
  while (!confirmLowercase && !confirmNumbers && !confirmSpecial && !confirmUppercase) {
    window.alert("Password must have at least one type of character.");
    var characterBank = "";
    var confirmUppercase = window.confirm("Confirm uppercase?");
    console.log(confirmUppercase);
    if (confirmUppercase === true) {
      characterBank = characterBank + uppercase;
    }

    var confirmLowercase = window.confirm("Confirm lowercase?");
    if (confirmLowercase === true) {
      characterBank = characterBank + lowercase;
    }

    var confirmNumbers = window.confirm("Confirm number?");
    if (confirmNumbers === true) {
      characterBank = characterBank + numbers;
    }

    var confirmSpecial = window.confirm("Confirm special?");
    if (confirmSpecial === true) {
      characterBank = characterBank + special;
    }
  }
  var random = ""; //here we generate the random password using the characterBank
  for (var i = 1, n = characterBank.length; i <= passwordLength; i++) {
    random += characterBank.charAt(Math.floor(Math.random() * n));
  }
  console.log(random); //the random password is shown in the console
  return random;
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
