const form = document.querySelector('.form')
const required = document.querySelectorAll('.required')
const sucessoMessage = document.getElementById("sucess-message");

form.addEventListener('submit', (e) => {

    
    e.preventDefault()
    

    
    const input = document.querySelectorAll('input')
    const firstName = document.querySelector('#fName').value
    const lastName = document.querySelector('#lName').value.trim()
    const email = document.querySelector('#email').value
    const queryType = document.querySelector('input[name="query"]:checked')
    const mensage = document.getElementById('mensagem').value.trim()
    const consent = document.querySelector('#consent-check').checked

    let isValid = true ;

        // Validacao First Name
        if ( input[0].value.length < 3 ) {

            isValid = false;

            required[0].style.display = "block";
            input[0].style.border = "1px solid #ff0000";

        } else {
            required[0].style.display = "none";
            input[0].style.border = "";
        }

        // Validacao Last Name
        if ( input[1].value.length < 3 ) {

            isValid = false;

            required[1].style.display = "block";
            input[1].style.border = "1px solid #ff0000";

        } else {
            required[1].style.display = "none";
            input[1].style.border = "";
        }

        // Validacao E-mail
        if (email === "" ) {

            isValid = false;

            required[2].style.display = "block";
            input[2].style.border = "1px solid #ff0000";

        } else {

            required[2].style.display = "none";
            input[2].style.border = "";
        }

        //Validacao da Query Radio
        if ( !queryType ) {

            isValid = false;

            required[4].style.display = "block";
        } else {
            required[4].style.display = "none";
        }

        // Validacao Mensagem 
        if (mensage === "" ) {

            isValid = false;

            required[5].style.display = "block";
            mensagem.classList.add('textborder');

        } else {

            required[5].style.display = "none";
            mensagem.classList.remove('textborder');
        }

        // Validacao do Check Consent
        if (consent === false ) {

            isValid = false;

            required[6].style.display = "block";

        } else {

            required[6].style.display = "none";
        }
    
    // Valicao de Formulario
    if (isValid) {
        
        sucessoMessage.classList.add('active')
        form.reset()
    }       
    
})

function isValidEmail(email){
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/;
    return emailRegex.test(email);
}

form.addEventListener('click', function removeSucessAlert() {
    sucessoMessage.classList.remove('active');
})

