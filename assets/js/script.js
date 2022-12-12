// Assignment code here
var capitals = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialChar = ["!","@","#","$","%","^","&","*","(",")"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword(){
/* CHECK FOR LENGTH TO DO:::
    if (document.querySelector("#lengthPW").value == ""){
        var passwordText = document.querySelector("#password");
        passwordText.value = "Please Select a password length";              
    }
    */
    var passwordLength = document.getElementById("lengthPW").value;
    var specialCharYN = document.getElementById("specialCharYN").value;
    var upperCaseYN = document.getElementById("upperCaseYN").value;
    var lowerCaseYN = document.getElementById("lowerCaseYN").value;
    var numericYN = document.getElementById("numericYN").value;
    var tempPassword = "";

    while(tempPassword.length < passwordLength){

        if(specialCharYN == "true"){
            tempPassword = specialChar[Math.floor(Math.random() * specialChar.length)].concat(tempPassword);

            if(tempPassword.length == passwordLength) {
                break;
            }
        }
        
        if (upperCaseYN == "true"){
            tempPassword = capitals[Math.floor(Math.random() * capitals.length)].concat(tempPassword);
            
            if(tempPassword.length == passwordLength) {
                break;
            }
        } 
        
        if (lowerCaseYN == "true"){
            tempPassword = lowerCase[Math.floor(Math.random() * lowerCase.length)].concat(tempPassword);
            
            if(tempPassword.length == passwordLength) {
                break;
            }
        }

        if (numericYN == "true"){
            tempPassword = numbers[Math.floor(Math.random() * numbers.length)].concat(tempPassword);
            
            if(tempPassword.length == passwordLength) {
                break;
            }
        }

    }

    return tempPassword;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);