'use strict';

let difficulty = 'easy';
let secretNumber;

let guessedNumber;
let guessingCounter;

const assignDifficulty = function () {
  if (document.querySelector('#difficulty-easy').checked) difficulty = 'easy';
  if (document.querySelector('#difficulty-medium').checked)
    difficulty = 'medium';
  if (document.querySelector('#difficulty-hard').checked) difficulty = 'hard';
};

const generateNumber = function () {
  if (difficulty === 'hard') {
    secretNumber = Math.trunc(Math.random() * 100) + 1;
  } else if (difficulty === 'medium') {
    secretNumber = Math.trunc(Math.random() * 50) + 1;
  } else {
    secretNumber = Math.trunc(Math.random() * 10) + 1;
  }
};

const startGame = function () {
  assignDifficulty();
  generateNumber();
  guessingCounter = 0;
  document.querySelector('#counter').textContent = '0';
  let instructionsBetween;
  if (difficulty === 'hard') {
    instructionsBetween = '1 and 100';
  } else if (difficulty === 'medium') {
    instructionsBetween = '1 and 50';
  } else {
    instructionsBetween = '1 and 10';
  }
  document.querySelector(
    '#instructions'
  ).innerText = `Guess the number between ${instructionsBetween}!`;
  document.querySelector('#feedback').textContent = "Let's get started!";
  document.querySelector('.number').value = '';
  document.querySelector('.guess').disabled = false;
  document.querySelector('.number').disabled = false;
};

const guessTheNumber = function () {
  guessedNumber = document.querySelector('.number').value;
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
  document.querySelector('#feedback').textContent = feedbackMessage;
  guessingCounter++;
  document.querySelector('#counter').textContent = guessingCounter;
};

const giveUp = function () {
  document.querySelector(
    '#feedback'
  ).innerText = `Oh no. You gave up. The number would have been ${secretNumber}. Give it another try!!`;
  document.querySelector('.guess').disabled = true;
  document.querySelector('.number').disabled = true;
};

const emptyInput = function () {
  this.value = '';
};

document.addEventListener('DOMContentLoaded', startGame());
document
  .querySelector('.choose-difficulty')
  .addEventListener('click', function () {
    startGame();
  });
document.querySelector('.start').addEventListener('click', function () {
  startGame();
});

document.querySelector('.guess').addEventListener('click', function () {
  guessTheNumber();
});

document.querySelector('.reveal').addEventListener('click', function () {
  giveUp();
});
