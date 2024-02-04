// Écouteurs d'événements pour les champs du formulaire
document.getElementById('nom').addEventListener('input', validerNom);
document.getElementById('prenom').addEventListener('input', validerPrenom);
document.getElementById('email').addEventListener('input', validerEmail);
document.getElementById('telephone').addEventListener('input', validerTelephone);
document.getElementById('adresse').addEventListener('input', validerAdresse);
document.getElementById('codePostal').addEventListener('input', validerCodePostal);
document.getElementById('ville').addEventListener('input', validerVille);
document.getElementById('numeroCarte').addEventListener('input', validerNumeroCarte);
document.getElementById('ccv').addEventListener('input', validerCCV);

function validerNom() {
    var nom = document.getElementById('nom').value.trim();
    if (nom === '') {
        document.getElementById('nom').style.borderColor = 'red';
        document.getElementById('erreurNom').innerHTML = 'Veuillez saisir votre nom.';
    } else {
        document.getElementById('nom').style.borderColor = '';
        document.getElementById('erreurNom').innerHTML = '';
    }
}

function validerPrenom() {
    var prenom = document.getElementById('prenom').value.trim();
    if (prenom === '') {
        document.getElementById('prenom').style.borderColor = 'red';
        document.getElementById('erreurPrenom').innerHTML = 'Veuillez saisir votre prénom.';
    } else {
        document.getElementById('prenom').style.borderColor = '';
        document.getElementById('erreurPrenom').innerHTML = '';
    }
}

function validerEmail() {
    var email = document.getElementById('email').value.trim();
    if (!isValidEmail(email)) {
        document.getElementById('email').style.borderColor = 'red';
        document.getElementById('erreurEmail').innerHTML = 'Veuillez saisir une adresse email valide.';
    } else {
        document.getElementById('email').style.borderColor = '';
        document.getElementById('erreurEmail').innerHTML = '';
    }
}

function validerTelephone() {
    var telephone = document.getElementById('telephone').value.trim();
    if (!isValidPhone(telephone)) {
        document.getElementById('telephone').style.borderColor = 'red';
        document.getElementById('erreurTelephone').innerHTML = 'Veuillez saisir un numéro de téléphone valide.';
    } else {
        document.getElementById('telephone').style.borderColor = '';
        document.getElementById('erreurTelephone').innerHTML = '';
    }
}

function validerAdresse() {
    var adresse = document.getElementById('adresse').value.trim();
    if (adresse === '') {
        document.getElementById('adresse').style.borderColor = 'red';
        document.getElementById('erreurAdresse').innerHTML = 'Veuillez saisir votre adresse.';
    } else {
        document.getElementById('adresse').style.borderColor = '';
        document.getElementById('erreurAdresse').innerHTML = '';
    }
}

function validerCodePostal() {
    var codePostal = document.getElementById('codePostal').value.trim();
    if (codePostal === '') {
        document.getElementById('codePostal').style.borderColor = 'red';
        document.getElementById('erreurCodePostal').innerHTML = 'Veuillez saisir votre code postal.';
    } else {
        document.getElementById('codePostal').style.borderColor = '';
        document.getElementById('erreurCodePostal').innerHTML = '';
    }
}

function validerVille() {
    var ville = document.getElementById('ville').value.trim();
    if (ville === '') {
        document.getElementById('ville').style.borderColor = 'red';
        document.getElementById('erreurVille').innerHTML = 'Veuillez saisir votre ville.';
    } else {
        document.getElementById('ville').style.borderColor = '';
        document.getElementById('erreurVille').innerHTML = '';
    }
}

function validerNumeroCarte() {
    var numeroCarte = document.getElementById('numeroCarte').value.trim();
    if (!isValidCreditCard(numeroCarte)) {
        document.getElementById('numeroCarte').style.borderColor = 'red';
        document.getElementById('erreurNumeroCarte').innerHTML = 'Veuillez saisir un numéro de carte valide.';
    } else {
        document.getElementById('numeroCarte').style.borderColor = '';
        document.getElementById('erreurNumeroCarte').innerHTML = '';
    }
}

function validerCCV() {
    var ccv = document.getElementById('ccv').value.trim();
    if (ccv === '' || ccv.length !== 3 || isNaN(ccv)) {
        document.getElementById('ccv').style.borderColor = 'red';
        document.getElementById('erreurCCV').innerHTML = 'Veuillez saisir un CCV valide (3 chiffres).';
    } else {
        document.getElementById('ccv').style.borderColor = '';
        document.getElementById('erreurCCV').innerHTML = '';
    }
}

function isValidEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function isValidPhone(phone) {
    var re = /^\d{10}$/;
    return re.test(phone);
}

function isValidCreditCard(cardNumber) {
    var re = /^\d{16}$/;
    return re.test(cardNumber);
}

function validerFormulaire() {
    var erreur = false;
    var messageErreur = '';

    // Valider l'étape 1
    var civilite = document.querySelector('input[name="civilite"]:checked');
    var nom = document.getElementById('nom').value.trim();
    var prenom = document.getElementById('prenom').value.trim();
    var email = document.getElementById('email').value.trim();
    var telephone = document.getElementById('telephone').value.trim();

    if (!civilite) {
        erreur = true;
        messageErreur += 'Veuillez sélectionner une civilité.<br>';
    }
    if (nom === '') {
        erreur = true;
        messageErreur += 'Veuillez saisir votre nom.<br>';
    }
    if (prenom === '') {
        erreur = true;
        messageErreur += 'Veuillez saisir votre prénom.<br>';
    }
    if (!isValidEmail(email)) {
        erreur = true;
        messageErreur += 'Veuillez saisir une adresse email valide.<br>';
    }
    if (!isValidPhone(telephone)) {
        erreur = true;
        messageErreur += 'Veuillez saisir un numéro de téléphone valide.<br>';
    }

    // Valider l'étape 2
    var adresse = document.getElementById('adresse').value.trim();
    var codePostal = document.getElementById('codePostal').value.trim();
    var ville = document.getElementById('ville').value.trim();

    if (adresse === '') {
        erreur = true;
        messageErreur += 'Veuillez saisir votre adresse.<br>';
    }
    if (codePostal === '') {
        erreur = true;
        messageErreur += 'Veuillez saisir votre code postal.<br>';
    }
    if (ville === '') {
        erreur = true;
        messageErreur += 'Veuillez saisir votre ville.<br>';
    }

    // Valider l'étape 3
    var typeCarte = document.querySelector('input[name="typeCarte"]:checked');
    var numeroCarte = document.getElementById('numeroCarte').value.trim();
    var ccv = document.getElementById('ccv').value.trim();

    if (!typeCarte) {
        erreur = true;
        messageErreur += 'Veuillez sélectionner un type de carte.<br>';
    }
    if (!isValidCreditCard(numeroCarte)) {
        erreur = true;
        messageErreur += 'Veuillez saisir un numéro de carte valide.<br>';
    }
    if (ccv === '' || ccv.length !== 3 || isNaN(ccv)) {
        erreur = true;
        messageErreur += 'Veuillez saisir un CCV valide (3 chiffres).<br>';
    }

    if (erreur) {
        document.getElementById('messageErreur').innerHTML = messageErreur;
    } else {
        document.getElementById('messageErreur').innerHTML = 'Formulaire envoyé avec succès.';
        viderChamps();
    }
}

function viderChamps() {
    document.getElementById('monFormulaire').reset();
}

