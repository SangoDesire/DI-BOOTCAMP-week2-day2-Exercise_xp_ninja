//PART 1: Sans expressions regulières
/*1- While working in a Post Office you must have the clients’ zip code in order to send them their letters.
2- Ask the client for their zip code and console.log “success” or “error” based on the following rules.
    1-Zip codes consists of 5 numbers
    2-Must only contain numbers
    3-Must not contain any whitespace (spaces)
    4-Must not be greater than 5 digits in length */

let zipCode = prompt("Entrer le code zip svp (5 caractères)!");
if (zipCode.length == 5 && !isNaN(zipCode) && zipCode.trim().search(" ") == -1) {
    console.log("Success");
} else {
    console.log("Error");
}

//PART 2: Avec expression reguliere
