// Реализовать функцию для сравнения двух массивов, сравнение должно попарно сравнивать каждый элемент

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5];

let result = function () {
  return arr1.some((elem, index) => {
    return elem !== arr2[index];
  });
};

console.log(result() ? "в массивах есть хотябы одно различие" : "массивы одинаковые");
