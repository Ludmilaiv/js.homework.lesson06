let getRandomInt = function(min, max) {
  return Math.floor(min + Math.random() * Math.floor(max));
}

let isNumber = function(n) {
  return !isNaN(parseInt(n)) && isFinite(n);
}

function start() {
  //Замыкаем переменные с загаданным, введённым числом и кол-вом попыток
  let desirNumber = getRandomInt(1,100);
  let customNumber = +prompt("Введите число");
  let userHP = 10;
  //рекурсивная функция игрового цикла
  function gameLoop() {
    if (!isNumber(customNumber)) {
      customNumber = +prompt("Введите число!");
      gameLoop();
    } else {
      userHP--;
      if (userHP === 0) {
        if (confirm("Попытки закончились, хотите сыграть еще?")) {
          //Заново создаём переменную, содержащую функцию игрового цикла
          //для того, чтобы обновить замкнутые переменные
          let newGame = start();
          newGame();
        } else {
          alert("Пока!")
        }
      } else {
        if (customNumber > desirNumber) {
          customNumber = +prompt("Загаданное число меньше. Осталось попыток " + userHP);
          gameLoop();
        } else {
          if (customNumber < desirNumber) {
            customNumber = +prompt("Загаданное число больше. Осталось попыток " + userHP);
            gameLoop();
          } else {
            if (confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?")) {
              //Заново создаём переменную, содержащую функцию игрового цикла
              //для того, чтобы обновить замкнутые переменные
              let newGame = start();
              newGame();
            } else {
              alert("Пока!")
            }
          }
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
