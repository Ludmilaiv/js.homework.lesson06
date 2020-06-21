let getRandomInt = function(min, max) {
  return Math.floor(min + Math.random() * Math.floor(max));
}

let isNumber = function(n) {
  return !isNaN(parseInt(n)) && isFinite(n);
}

function start() {
  //Замыкаем переменные с загаданным и введённым числом
  let desirNumber = getRandomInt(1,100);
  let customNumber = +prompt("Введите число");
  //рекурсивная функция игрового цикла
  function gameLoop() {
    if (!isNumber(customNumber)) {
      customNumber = +prompt("Введите число!");
      gameLoop();
    } else {
      if (customNumber > desirNumber) {
        customNumber = +prompt("Загаданное число меньше. Введите ещё вариант");
      gameLoop();
      } else {
        if (customNumber < desirNumber) {
          customNumber = +prompt("Загаданное число больше. Введите ещё вариант");
          gameLoop();
        } else {
          alert("Победа!");
        }
      }
    } 
    return;
  }
  //возвращаем функцию для игрового цикла
  return gameLoop;
}

//сохраняем в перемнную game функцию gameLoop вместе с замкнутыми переменными
let game = start(); 
//и вызываем
game(); 