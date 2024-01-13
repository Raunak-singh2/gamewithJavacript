let computeGuess;
let userGuess = [];
const updateTextOutput = document.getElementById("yourGuess");
const userUpdate = document.getElementById("inputBox");
const nweGameBegining = document.getElementById("nweGameBegining");

const audio = new Audio("musics.mp3");

nweGameBegining.addEventListener("click", () => {
  window.location.reload();
})


const init = () => {
  computeGuess = Math.floor(Math.random() * 100);
  console.log(computeGuess);
  document.getElementById("newGamrButton").style.display = "none";
  document.getElementById("gameArea").style.display = "none";
};

const startGame = () => {
  audio.play();
  document.getElementById("gameArea").style.display = "block";
  document.getElementById("homeScreen").style.display = "none";
};

const easyGame = () => {
  maxGuess = 10;
  startGame();
  audio.play();
};

const hardGame = () => {
  minGuess = 5;
  startGame();
  audio.play();
};
const myFunction = () => {
  audio.play();
  const userNumber = document.getElementById("inputBox").value;
  userGuess = [...userGuess, userNumber];
  updateTextOutput.innerHTML = userGuess;

  if (userGuess.length < maxGuess) {
    if (userNumber > computeGuess) {
      updateTextOutput.innerText = "Your Guess is too heigh😮.";
      userUpdate.value = "";
    } else if (userNumber < computeGuess) {
      document.getElementById("yourGuess").innerText =
        "Your Guess is too low 😔.";
      userUpdate.value = "";
    } else {
      updateTextOutput.innerText = "You Won😊";
      userUpdate.value = "";
      startNewGame();
    }
  } else {
    if (userNumber > computeGuess) {
      updateTextOutput.innerText = `You Lose the game correct number was ${computeGuess}`;
      userUpdate.value = "";
      startNewGame();
    } else if (userNumber < computeGuess) {
      document.getElementById(
        "yourGuess"
      ).innerText = `You Lose the game correct number was${computeGuess}`;
      userUpdate.value = "";
      startNewGame();
    } else {
      updateTextOutput.innerText = "You Won😊";
      userUpdate.value = "";
      startNewGame();
    }
  }
  document.getElementById("attampts").innerHTML = userGuess.length;
  document.getElementById("guess").innerHTML = userGuess;
};

const startNewGame = () => {
  audio.play();
  document.getElementById("newGamrButton").style.display = "block";
  userUpdate.setAttribute("disabled", true);

};
