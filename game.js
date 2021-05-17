player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function hello(){

    n1 = document.getElementById("nu1").value;
    n2 = document.getElementById("nu2").value;
    AA = parseInt(n1) * parseInt(n2);

    question_word = "<h4>" + n1 + " X " + n2 + "</h4>";
    input_box = "<br> Answer : <input type = 'number' id = 'input_check_box'> ";
    check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()'>Check</button>";
    row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("nu1").value = "";
    document.getElementById("nu2").value = "";

}

qt = "player1";

at = "player2";

function check(){

    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer;
    console.log("answer - " + answer);

    if(answer == AA){

        if(at == "player1"){

            update_player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = update_player1_score;

        }
        else{

            update_player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = update_player2_score;

        }  

    }

    if(qt == "player1"){

        qt = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;

    }
    else{

        qt = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;

    }



    if(at == "player1"){

        at = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

    }
    else{

        at = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;

    }

    document.getElementById("output").innerHTML = "";

}
