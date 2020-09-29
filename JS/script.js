function inp() {

    var player1Num = Math.floor(Math.random() * 6) + 1;

    var player2Num = Math.floor(Math.random() * 6) + 1;

    // Changing heading dynamically
    if (player1Num > player2Num) {
        document.querySelector("h1").innerText = "🚩Player 1 won";
    } else if (player1Num < player2Num) {
        document.querySelector("h1").innerText = "Player 2 won🚩";
    } else if (player1Num === player2Num) {
        document.querySelector("h1").innerText = "It's a tie";
    }

    document.querySelector(".img1").setAttribute("src", 'images/dice' + eval(player1Num) + '.png');

    document.querySelector(".img2").setAttribute("src", 'images/dice' + eval(player2Num) + '.png');

}


// document.querySelector(".img1").setAttribute("src", "images/dice4.png");