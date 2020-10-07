// Реализовать функцию, которая принимает текст, и возвращает массив объектов со структурой { word: 'smth', length: 1, isCapitalized: false}

const arrOfObjects = (str) => {
  const arr = str.split(" ");
  const newArr = arr.map((word) => {
    return {
      word: word,
      length: word.length,
      isCapitalized: word.charAt(0).toUpperCase() === word.charAt(0),
    };
  });
  return newArr;
};
console.log(arrOfObjects("Хорошо живет на свете Винни Пух"));
