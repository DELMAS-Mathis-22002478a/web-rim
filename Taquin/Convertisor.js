// Convertisor.js

document.addEventListener("DOMContentLoaded", function () {
    // Fonction pour échanger les positions de deux éléments
    function swapElements(element1, element2) {

        const temp = document.createElement("div");
        element1.parentNode.insertBefore(temp, element1);
        element2.parentNode.insertBefore(element1, element2);
        temp.parentNode.insertBefore(element2, temp);
        temp.parentNode.removeChild(temp);
    }

    // Fonction pour gérer le clic sur les boutons
    function handleButtonClick(event) {
        const clickedButton = event.target;

        // Vérifier si le bouton cliqué est adjacent à la case vide
        if (
            (clickedButton.nextElementSibling && clickedButton.nextElementSibling.id === "case_vide") ||
            (clickedButton.previousElementSibling && clickedButton.previousElementSibling.id === "case_vide") ||
            (clickedButton.parentNode.previousElementSibling &&
                clickedButton.parentNode.previousElementSibling.querySelector("#case_vide")) ||
            (clickedButton.parentNode.nextElementSibling &&
                clickedButton.parentNode.nextElementSibling.querySelector("#case_vide"))
        ) {
            // Échanger la position du bouton cliqué avec la case vide
            swapElements(clickedButton, document.getElementById("case_vide"));
        }
    }

    // Ajouter un gestionnaire d'événements à tous les boutons
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", handleButtonClick);
    });
});
