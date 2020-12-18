// Assignment Code
var generateBtn = document.querySelector('#generate');
var lowerChars = 'abcdefghijklmnopqrstuvwxyz';
var upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var specChars = ' !\"#$%&\'()*+,-./:;<=>?@[\]^_\`{|}~';

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}

function generatePassword() {
  var password = '';
  var availChars = lowerChars;
  var passwordLength = 8;

  for (var i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * availChars.length);
    password += availChars[index];
  }
  return password;
}


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
