// Assignment code here



// Get references to the #generate element
var generateBtn = document.querySelector("generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword(generateBtn);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  let key_value = "1234567890qwertyuiop[]asdfghjkl;!@#$zxcvbnm,."
  var pwd_length = 16;
  for (var i=0; i<pwd_length; i++) {
    var generateBtn = math.floor(math.random()* key_value.length);
    password += key_value.substring(randomnumber, randomnumber +1);
} 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword).value = password
}


