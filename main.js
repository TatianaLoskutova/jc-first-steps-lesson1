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

const name = getPlayerName();

const getRandomNumber = () => {
  const randomNumber = Math.round(Math.random() * 100);
  return randomNumber;
};

const number = getRandomNumber();
