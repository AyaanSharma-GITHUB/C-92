function addUser(){

    p1n = document.getElementById("player1_name_input").value;
    p2n = document.getElementById("player2_name_input").value;

    localStorage.setItem("player1_name", p1n);
    localStorage.setItem("player2_name", p2n);

    window.location = "game.html";

}