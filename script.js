'use strict';

const randomNumber = function () {
  let randomNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(randomNumber);
  return randomNumber;
};

randomNumber();

const player1TotalObject = document.querySelector('.total-score--0');

const player2TotalObject = document.querySelector('.total-score--1');

const player1CurrentObject = document.querySelector('#current--0');

const player2CurrentObject = document.querySelector('#current--1');

const rollDiceBtn = document.querySelector('.rollDice');

const holdBtn = document.querySelector('.hold');

const newGame = document.querySelector('.newGame');

const playerObj = document.querySelectorAll('.player');

const diceImageArray = document.querySelectorAll('.dice');

const diceImage = document.querySelector('.dice');

// console.log(playerObj[0].classList.contains('player--active'));

diceImage.classList.add('hidden');
player1CurrentObject.textContent = 0;
player2CurrentObject.textContent = 0;

player1TotalObject.textContent = 0;
player2TotalObject.textContent = 0;

// const curentScore = function (currentScorePlayer1) {

// };

// const displayDice = function (a) {
//   diceImageArray[a - 1].classList.remove('hidden');
// };

// const removeDisplayyDice = function (a) {
//   diceImageArray[a - 1].classList.add('hidden');
// };

const switchPlayer = function () {
  if (playerObj[0].classList.contains('player--active')) {
    playerObj[0].classList.remove('player--active');
    playerObj[1].classList.add('player--active');
  } else if (playerObj[1].classList.contains('player--active')) {
    playerObj[1].classList.remove('player--active');
    playerObj[0].classList.add('player--active');
  }
};

newGame.addEventListener('click', function () {
  rollDiceBtn.disabled = false;
  rollDiceBtn.textContent = '🎲 Roll Dice';
  holdBtn.disabled = false;

  currentScorePlayer1 = 0;
  totalScorePlayer1 = 0;

  totalScorePlayer1 = 0;
  currentScorePlayer2 = 0;

  player1CurrentObject.textContent = 0;
  player2CurrentObject.textContent = 0;

  player1TotalObject.textContent = 0;
  player2TotalObject.textContent = 0;

  if (playerObj[1].classList.contains('player--active')) {
    playerObj[1].classList.remove('player--active');
    playerObj[0].classList.add('player--active');
  }

  playerObj[0].classList.remove('player--winner');
  playerObj[1].classList.remove('player--winner');

  // for (let i = 0; i < diceImageArray.length; i++) {
  //   if (!diceImageArray[i].classList.contains('hidden')) {
  //     diceImageArray[i].classList.add('hidden');
  //   }
  // }
});

holdBtn.addEventListener('click', function () {
  if (playerObj[0].classList.contains('player--active')) {
    totalScorePlayer1 += currentScorePlayer1;
    player1TotalObject.textContent = totalScorePlayer1;
    currentScorePlayer1 = 0;
    player1CurrentObject.textContent = currentScorePlayer1;
    diceImage.classList.add('hidden');

    // check winner
    if (totalScorePlayer1 >= 100) {
      rollDiceBtn.textContent = '🎉 Player 1 Wins';
      playerObj[0].classList.add('player--winner');
      rollDiceBtn.disabled = true;
      holdBtn.disabled = true;
      totalScorePlayer1 = 0;
      currentScorePlayer1 = 0;
      totalScorePlayer2 = 0;
      currentScorePlayer2 = 0;
      diceImage.classList.add('hidden');
    }

    // switch
    playerObj[0].classList.remove('player--active');
    playerObj[1].classList.add('player--active');
  } else if (playerObj[1].classList.contains('player--active')) {
    totalScorePlayer2 += currentScorePlayer2;
    player2TotalObject.textContent = totalScorePlayer2;
    currentScorePlayer2 = 0;
    player2CurrentObject.textContent = currentScorePlayer2;
    diceImage.classList.add('hidden');

    // check winner
    if (totalScorePlayer2 >= 100) {
      rollDiceBtn.textContent = '🎉 Player 2 Wins';
      playerObj[1].classList.add('player--winner');
      rollDiceBtn.disabled = true;
      holdBtn.disabled = true;
      totalScorePlayer2 = 0;
      currentScorePlayer2 = 0;
      totalScorePlayer1 = 0;
      currentScorePlayer1 = 0;
      diceImage.classList.add('hidden');
    }

    playerObj[1].classList.remove('player--active');
    playerObj[0].classList.add('player--active');
  }

  // switchPlayer();
});

// let dice;
let currentScorePlayer1 = 0;

let totalScorePlayer1 = 0;

let currentScorePlayer2 = 0;

let totalScorePlayer2 = 0;

rollDiceBtn.addEventListener('click', function () {
  // dice = randomNumber();
  // displayDice(dice);
  const dice = Math.trunc(Math.random() * 6) + 1;

  diceImage.classList.remove('hidden');
  diceImage.src = `images/dice-${dice}.png`;
  if (playerObj[0].classList.contains('player--active')) {
    if (dice !== 1) {
      currentScorePlayer1 += dice;
      // totalScorePlayer1 += currentScorePlayer1;
      // console.log(totalScorePlayer1);
      player1CurrentObject.textContent = currentScorePlayer1;
      // player1TotalObject.textContent = totalScorePlayer1;
      // if (totalScorePlayer1 >= 100) {
      //   rollDiceBtn.textContent = 'Player 1 Wins';
      //   rollDiceBtn.disabled = true;
      //   holdBtn.disabled = true;
      // }
    } else {
      currentScorePlayer1 = 0;
      player1CurrentObject.textContent = currentScorePlayer1;

      switchPlayer();
    }
  } else {
    // currentScorePlayer2 = randomNumber();
    if (dice !== 1) {
      // totalScorePlayer2 += currentScorePlayer2;
      // console.log(totalScorePlayer2);
      currentScorePlayer2 += dice;
      player2CurrentObject.textContent = currentScorePlayer2;
      // player2TotalObject.textContent = totalScorePlayer2;
      // if (totalScorePlayer2 >= 100) {
      //   rollDiceBtn.textContent = 'Player 2 Wins';
      //   rollDiceBtn.disabled = true;
      //   holdBtn.disabled = true;
      // }
    } else {
      currentScorePlayer2 = 0;
      player2CurrentObject.textContent = currentScorePlayer2;
      switchPlayer();
    }
  }
  // diceImage.classList.add('.hidden');
  // removeDisplayyDice(a);
});
