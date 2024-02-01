function game() {
    var nombreAleatoire = Math.floor(Math.random() * 5000) + 1;
    var devine = document.getElementById("nombre").value;
    var result = document.getElementById("result");
    var nombreDeCoups = 0;

    while (devine != nombreAleatoire) {
        nombreDeCoups++;
        if (devine < nombreAleatoire) {
            devine = prompt("Plus grand !");
        } else if (devine > nombreAleatoire) {
            devine = prompt("Plus petit !");
        }
    }

    result.innerHTML = "Bravo, tu as deviné le nombre en " + nombreDeCoups + " coups!";
}