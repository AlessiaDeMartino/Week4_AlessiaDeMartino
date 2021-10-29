
function save() {
   let inputs = document.getElementsByClassName("input");
    let name = inputs[0].value;
    //salvo nel local storage
    localStorage.setItem('name', name);
}

function changeLoginButton() {

    let inputs = document.getElementsByClassName("input");

 
    let loginButton = document.querySelector("input[type='submit']")

    //verifico che siano compilati (anche se mi aspetto un solo input)
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") 
        {
            //il tasto login resta disabilitato
            loginButton.disabled = true;
            return;
        }
        loggedIn = true;
        loginButton.disabled = false;
    }
}

function hideForm() {
    
    let form = document.querySelector("form");

    form.style.display = "none"; 

    let logoutButton = document.getElementById("logoutButton");

   logoutButton.style.display = "inline";
}

function checkLoggedName() {
    //recupero i dati dal local storage
    let name = localStorage.getItem('name');
    //se trovo il name nascondo la form e resta visibile solo unsubscribe che è nell'altra funzione
    if (name != null) {
        alert("Benvenuto " + name);
        hideForm();
    }
}

function unsubscribe() {
        localStorage.clear() //svuoto il local storage

        let form = document.querySelector("form");
        form.style.display = "";

        let unsubscribeButton = document.getElementById("logoutButton");
        unsubscribeButton.style.display = "none";
    }
