window.onload = function() {

    let cardNumber = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let suit = ["Hearts", "Diamonds", "Spades", "Clubs"];

    let randomCardNumber = Math.floor(Math.random() * cardNumber.length);
    let randomSuit = Math.floor(Math.random() * suit.length);
    let finalSuit = suit[randomSuit]

    document.getElementById("cardContent").innerHTML = cardNumber[randomCardNumber];
    document.getElementById("theCard").className = "";
    document.getElementById("theCard").classList.add("card");
    document.getElementById("theCard").classList.add(getSuitClass(finalSuit));

    function getSuitClass(suit) {
        switch (suit){
            case "Hearts": return "suit-hearts"; break;
            case "Diamonds": return "suit-diamonds"; break;
            case "Spades": return "suit-spades"; break;
            case "Clubs": return "suit-clubs"; break;
        }
    }
}
