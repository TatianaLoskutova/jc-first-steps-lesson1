// let, const - создание переменных. let когда будем менять их, const когда нет
// if-else - управляющая конструкция
// for - цикл
// function, ()=>{} - функции, стрелочные функции

const MAX = 100;
const MIN = 0;
const ATTEMPTS_NUMBER = 10;

function getPlayerName() {
  const playerName = prompt("Как тебя зовут?", "");
  return playerName;
}

const playerName = getPlayerName(); // "Татьяна"

const getRandomNumber = () => {
  const randomNumber = Math.round(Math.random() * 100);
  return randomNumber;
};

const number = getRandomNumber();

console.log(playerName, number);

const game = (max, min, attNumber, randomNumber, name) => {
  alert(`Привет, ${name}!
  Я загдал число в интервале от ${min} до ${max}.
  У тебя есть ${attNumber} попыток, чтобы отгадать это число`);
  for (let i = 0; i < attNumber; i++) {
    const playerAnswer = prompt("Какое число я загадал?", "");
    if (playerAnswer > randomNumber) {
      alert("Мое число меньше");
    } else if (playerAnswer < randomNumber) {
      alert("Мое число больше");
    } else {
      alert("Ты Угадал!!!");
      return;
    }
  }
};

game(MAX, MIN, ATTEMPTS_NUMBER, number, playerName);
