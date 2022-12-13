// Assignment code here
var capitals = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialChar = ["!","@","#","$","%","^","&","*","(",")"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];

// variable initialized to button on webpage
var generateBtn = document.querySelector("#generate");

// this function will write the password to the webpage using query selector
function writePassword() {
  var password = generatePassword(password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(){
    //inititalizing all variables needed from html IDs
    var passwordLength = document.getElementById("lengthPW").value;
    var specialCharYN = document.getElementById("specialCharYN").value;
    var upperCaseYN = document.getElementById("upperCaseYN").value;
    var lowerCaseYN = document.getElementById("lowerCaseYN").value;
    var numericYN = document.getElementById("numericYN").value;
    //tempPassord to save current password and add to it with each iteration
    var tempPassword = "";

    while(tempPassword.length < passwordLength){
        //each iteration based on the length of password selected will add a character to a string "tempPassword" of each type that was selected on the webpage
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
    //returns the password to the writePassword function
    return tempPassword;
}


// event listener that calls writePassword function on click
generateBtn.addEventListener("click", writePassword);