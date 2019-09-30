
// create elements


const namn = "test";
const losenord = "1234";
var saveStorage = localStorage.getItem("saveToStorage");


function loggedIn() {
    // ändrar innehållet för den inloggade
    document.getElementById("logIn").innerHTML = "Välkommen";
    document.getElementById("header").innerHTML = "Du är inloggad, Välkommen";
    document.getElementById("form").style.display = "none";
   
    var logoutButton = document.createElement("button"); // skapar logout knapp
    logoutButton.classList.add("logout")                // skapar class för logout button
    document.body.appendChild(logoutButton);
    logoutButton.textContent = "Logga ut";
    logoutButton.onclick = function storage() {         // onclick function logout button, clear localstorage
        localStorage.clear();
        location.reload();
    }
}

function tryAgain(){
    document.getElementById("form").style.display = "none";
    var createP = document.createElement("p");
    document.body.appendChild(createP);
    createP.textContent = "Du är inte inloggad, försök igen"
    var loginAgainButton = document.createElement("button"); // skapar logout knapp
    loginAgainButton.classList.add("logInAgain")                // skapar class för logout button
    document.body.appendChild(loginAgainButton);
    loginAgainButton.textContent = "Försök igen";
    loginAgainButton.onclick = function reload(){
        location.reload();
    }


}

    if (saveStorage) {
        // anropar loggedIn
        loggedIn();
}

function checkUserInput() {
    // variables
    var userInput = document.getElementById("username").value;
    var userPassword = document.getElementById("password").value;
    if (namn === userInput && losenord === userPassword) {

        // anropar loggedIn 
        loggedIn();
        
        // localstorage
         localStorage.setItem("saveToStorage", true);
         myStorage = localStorage.getItem("saveToStorage");

    } else {

        // skriva ut fel användarnamn eller lösenord
        //anropa tryAgain för att logga in igen
       tryAgain();

}
}