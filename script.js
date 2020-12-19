// Assignment Code
var generateBtn = document.querySelector('#generate');
var lowerChars = 'abcdefghijklmnopqrstuvwxyz';
var upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var specChars = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var numChars = '1234567890';

// Write password to the #password input
function writePassword() {
  var options = {};
  options.passwordLength = prompt('Choose password length between 8 and 128', 8);
  options.useUppercase = confirm('Include uppercase letters?');
  options.useSpecial = confirm('Include special characters?');
  options.useNumbers = confirm('Include numbers?');
  var password = generatePassword(options);
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

function generatePassword(options) {
  options = options || {
    passwordLength: 8,
    useUppercase: true,
    useSpecial: true,
    useNumbers: true,
  };
  var password = '';
  var availChars = '';
  if (options.useUppercase) {
    availChars += upperChars;
  }
  if (options.useSpecial) {
    availChars += specChars;
  }
  if (options.useNumbers) {
    availChars += numChars;
  }

  console.log({ availChars });

  for (var i = 0; i < options.passwordLength; i++) {
    var index = Math.floor(Math.random() * availChars.length);
    password += availChars[index];
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
