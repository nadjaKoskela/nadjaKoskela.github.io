'use strict';

let difficulty = 'easy';
let secretNumber;

let guessedNumber;
let guessingCounter;

const assignDifficulty = function () {
  if (document.getElementById('difficulty-easy').checked) difficulty = 'easy';
  if (document.getElementById('difficulty-medium').checked)
    difficulty = 'medium';
  if (document.getElementById('difficulty-hard').checked) difficulty = 'hard';
};

const generateNumber = function () {
  if (difficulty === 'hard') {
    secretNumber = Math.floor(Math.random() * 100) + 1;
  } else if (difficulty === 'medium') {
    secretNumber = Math.floor(Math.random() * 50) + 1;
  } else {
    secretNumber = Math.floor(Math.random() * 10) + 1;
  }
};

const startGame = function () {
  assignDifficulty();
  generateNumber();
  guessingCounter = 0;
  document.getElementById('counter').innerText = '0';
  let instructionsBetween;
  if (difficulty === 'hard') {
    instructionsBetween = '1 and 100';
  } else if (difficulty === 'medium') {
    instructionsBetween = '1 and 50';
  } else {
    instructionsBetween = '1 and 10';
  }
  document.getElementById(
    'instructions'
  ).innerText = `Guess the number between ${instructionsBetween}!`;
  document.getElementById('number').value = '';
  document.getElementById('guess').disabled = false;
  document.getElementById('number').disabled = false;
};

const guessTheNumber = function () {
  guessedNumber = document.getElementById('number').value;
  let feedbackMessage;
  if (guessedNumber > secretNumber) {
    feedbackMessage =
      'Guess again - the number is lower than what you guessed.';
  } else if (guessedNumber < secretNumber) {
    feedbackMessage =
      'Guess again - the number is higher than what you guessed.';
  } else {
    feedbackMessage = 'Congratulations! You guessed correctly!';
  }
  document.getElementById('feedback').innerText = feedbackMessage;
  guessingCounter++;
  document.getElementById('counter').innerText = guessingCounter;
};

const giveUp = function () {
  document.getElementById(
    'feedback'
  ).innerText = `Oh no. You gave up. The number would have been ${secretNumber}. Give it another try!!`;
  document.getElementById('guess').disabled = true;
  document.getElementById('number').disabled = true;
};

const emptyInput = function () {
  this.value = '';
};

document.addEventListener('DOMContentLoaded', startGame());
