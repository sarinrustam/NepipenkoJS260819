// Написать функцию, которая преобразует строку вида list-style-image в listStyleImage
function camelize(str) {
    let array = str.split("-");

    for (let i = 0; i < array.length; i++) {
        if (i === 0) continue;

        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }
    return array.join("");

}
console.log(camelize("list-style-image"));
// Написать функцию, которая добавляет в массив класс class, но только если он там есть.
// let obj = {
//     className: 'open menu'
// }

// function addClass(object, cls) {
//     let objstr = object.className ? object.className.split(' ') : [];

//     for (let i = 0; i < objstr.length; i++) {
//         if (objstr[i] == cls) return;
//     }

//     objstr.push(cls);

//     object.className = objstr.join(' ');

// }

// addClass(obj, "now");
// alert(obj.className);


// let numbers = [1, 3, 4, 5, 6, 7, 2, 0, 4];

// function filterRange(array, a, b) {
//     let numbersChange = [];

//     for (let i = 0; i < array.length; i++) {
//         if (a <= array[i] && array[i] <= b) {
//             numbersChange.push(array[i])
//         }
//     }

//     return numbersChange;
// }

// console.log(filterRange(numbers, 4, 7));
// let myArray = ["Костя", 2, 1, "Sarin", "Настя"];

// function findElem(array, target) {
//     let item = -1;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === target) {
//             item = i;
//         }
//     }
//     return item;
// }


// alert(findElem(myArray, 3));
// let myArray = [];

// while (true) {
//     let value = prompt('Введите элемент м    ассива: ', '');

//     if (value === "" || value === " " || value === null || isNaN(value)) {
//         break;
//     }

//     myArray.push(+value);
// }

// let summa = 0;
// for (let i = 0; i < myArray.length; i++) {
//     summa += myArray[i]
// }

// alert(summa);

// let styles = ['Джаз', 'Блюз', ];
// console.log(styles);
// styles.push("Рок-н-ролл");
// console.log(styles);
// styles[styles.length - 2] = "Классика";
// console.log(styles);
// let a = styles.shift();
// console.log(a);
// console.log(styles);
// styles.unshift("Рэп", "Рэгги");
// console.log(styles);

// let rand = Math.floor(Math.random() * styles.length);
// console.log(styles[rand]);

// // function lastPush(array, str) {
// //     array[array.length] = str;
// //     return array;
// // };

// // lastPush(goods, "Компьютерыыыыы");
// // console.log(goods);