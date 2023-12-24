// lorsque la page est prête
document.addEventListener('DOMContentLoaded', function() {
    // recherche le bouton du menu
    const menuToggle = document.querySelector('.menu-toggle');
    // recherche la navigation du menu
    const menuNav = document.querySelector('.menu-nav');

    // quand on clique sur le bouton du menu
    menuToggle.addEventListener('click', () => {
        // montre ou cache la navigation du menu
        menuNav.classList.toggle('active');
    });

    // gestion du formulaire
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        // empêche l'envoi automatique du formulaire
        event.preventDefault();
        var isValid = true;

        // récupère le nom
        var name = document.getElementById('name');
        if (name.value.trim() === '') {
            showError(name, "veuillez entrer votre nom.");
            isValid = false;
        } else {
            hideError(name);
        }

        // récupère l'email
        var email = document.getElementById('email');
        if (email.value.trim() === '' || !email.validity.valid) {
            showError(email, "veuillez entrer un email valide.");
            isValid = false;
        } else {
            hideError(email);
        }

        // valide le mot de passe
        if (!validatePassword()) {
            isValid = false;
        }

        // si tout est bon, affiche un message de succès
        if (isValid) {
            var outputDiv = document.getElementById('form-output');
            outputDiv.innerHTML = "merci, votre message a été envoyé.";
            outputDiv.style.display = 'block';
        }
    });

    // récupère le champ du mot de passe
    let passwordInput = document.getElementById("password");

    // fonction de validation du mot de passe
    function validatePassword() {
        let passwordError = document.getElementById("mdpError");
        let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\/-]).{8,}$/;

        if (!passwordRegex.test(passwordInput.value)) {
            passwordError.textContent = "le mot de passe doit contenir au moins une majuscule, une minuscule et un caractère spécial, et faire au moins 8 caractères de long.";
            return false;
        } else {
            passwordError.textContent = "";
            return true;
        }
    }

    // ajoute un écouteur d'événement pour valider le mot de passe lors de chaque saisie
    passwordInput.addEventListener("input", validatePassword);

    // fonction pour afficher un message d'erreur
    function showError(inputElement, message) {
        var parent = inputElement.parentElement;
        var errorDisplay = parent.querySelector('.error-message');
        errorDisplay.innerText = message;
        errorDisplay.style.display = 'block';
    }

    // fonction pour masquer le message d'erreur
    function hideError(inputElement) {
        var parent = inputElement.parentElement;
        var errorDisplay = parent.querySelector('.error-message');
        errorDisplay.style.display = 'none';
    }
});

// lorsque la page est prête
document.addEventListener('DOMContentLoaded', function() {
    // recherche le bouton de bascule du mode sombre
    const toggleSwitch = document.querySelector('#dark-mode-toggle');

    // quand on clique sur le bouton de bascule du mode sombre
    toggleSwitch.addEventListener('click', function() {
        // bascule le mode sombre du site
        document.body.classList.toggle('dark-mode');
    });
});
