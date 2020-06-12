const cards = [
  "https://www.trustedtarot.com/img/cards/the-fool.png",
  "https://www.trustedtarot.com/img/cards/the-magician.png",
  "https://www.trustedtarot.com/img/cards/the-high-priestess.png",
  "https://www.trustedtarot.com/img/cards/the-empress.png",
  "https://www.trustedtarot.com/img/cards/the-emperor.png",
  "https://www.trustedtarot.com/img/cards/the-heirophant.png",
  "https://www.trustedtarot.com/img/cards/the-chariot.png",
  "https://www.trustedtarot.com/img/cards/strength.png",
  "https://www.trustedtarot.com/img/cards/the-hermit.png",
  "https://www.trustedtarot.com/img/cards/wheel-of-fortune.png",
  "https://www.trustedtarot.com/img/cards/justice.png",
  "https://www.trustedtarot.com/img/cards/the-hanged-man.png",
  "https://www.trustedtarot.com/img/cards/death.png",
  "https://www.trustedtarot.com/img/cards/temperance.png",
  "https://www.trustedtarot.com/img/cards/the-tower.png",
  "https://www.trustedtarot.com/img/cards/the-moon.png",
];

let numbersChosen = [];

$(() => {
  const $addRandomImageDiv = $("<div>");
  $addRandomImageDiv
    .css("display", "inline-block")
    .css("width", "130px")
    .css("height", "220px")
    .css("background-color", "black")
    .text("Click to Grab a Card")
    .css("color", "white")
    .css("text-align", "center")
    .css("display", "inline-flex")
    .css("align-items", "center")
    .css("font-size", "20px")
    .css("font-weight", "bold")
    .css("cursor", "pointer");
  $("section").append($addRandomImageDiv);
  $addRandomImageDiv.on("click", addCard);

  //   let randomNum;
  //   function checkNumber() {
  //     randomNum = Math.floor(cards.length * Math.random());
  //     for (i = 0; i < numbersChosen.length; i++) {
  //       if (randomNum === numbersChosen[i]) {
  //         checkNumber();
  //       } else {
  //         continue;
  //       }
  //       return randomNum;
  //     }
  //   }

  function addCard() {
    let randomNum = Math.floor(cards.length * Math.random());
    // checkNumber();
    let imgURL = cards[randomNum];
    let $cardImg = $("<img>");
    $cardImg
      .addClass("card")
      .attr("src", imgURL)
      .attr("alt", getReadableAlt(imgURL))
      .css("display", "inline-block")
      .css("width", "130px")
      .css("height", "220px")
      .css("background-size", "cover")
      .css("cursor", "pointer");
    $("section").append($cardImg);
    console.log("appear? ", randomNum);
  }

  //Bonus: Readable Alt
  function getReadableAlt(url) {
    let alt;
    switch (url) {
      case "https://www.trustedtarot.com/img/cards/the-fool.png":
        alt = "The Fool";
        break;
      case "https://www.trustedtarot.com/img/cards/the-magician.png":
        alt = "The Magician";
        break;
      case "https://www.trustedtarot.com/img/cards/the-high-priestess.png":
        alt = "The High Priestess";
        break;
      case "https://www.trustedtarot.com/img/cards/the-empress.png":
        alt = "The Empress";
        break;
      case "https://www.trustedtarot.com/img/cards/the-emperor.png":
        alt = "The Emperor";
        break;
      case "https://www.trustedtarot.com/img/cards/the-heirophant.png":
        alt = "The Heirophant";
        break;
      case "https://www.trustedtarot.com/img/cards/the-chariot.png":
        alt = "The chariot";
        break;
      case "https://www.trustedtarot.com/img/cards/strength.png":
        alt = "Strength";
        break;
      case "https://www.trustedtarot.com/img/cards/the-hermit.png":
        alt = "The Hermit";
        break;
      case "https://www.trustedtarot.com/img/cards/wheel-of-fortune.png":
        alt = "Wheel of Fortune";
        break;
      case "https://www.trustedtarot.com/img/cards/justice.png":
        alt = "Justice";
        break;
      case "https://www.trustedtarot.com/img/cards/the-hanged-man.png":
        alt = "The Hanged Man";
        break;
      case "https://www.trustedtarot.com/img/cards/death.png":
        alt = "Death";
        break;
      case "https://www.trustedtarot.com/img/cards/temperance.png":
        alt = "Temperance";
        break;
      case "https://www.trustedtarot.com/img/cards/the-tower.png":
        alt = "The Tower";
        break;
      case "https://www.trustedtarot.com/img/cards/the-moon.png":
        alt = "The Moon";
        break;
    }
    return alt;
  }

  //Bonus: input
  $(".addCardButton").on("click", addNewCard);
  function addNewCard() {
    let newURL = $(".inputBox").val();
    cards.push(newURL);
  }

  //Bonus: How to make sure all the card is chosen only once???

  //Bonus: click and remove??? Cannot work :(
  $(".card").on("click", removeCard);
  function removeCard() {
    $(this).hide();
  }
});
