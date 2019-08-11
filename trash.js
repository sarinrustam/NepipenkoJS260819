let text = document.body.insertAdjacentText('beforeend', 'Список: ');
let ul = document.createElement('ul');


document.body.append(ul);


while (true) {
    let data = prompt('Введите цвет радуги: ', 'Желтый');

    if (!data) {
        break;
    }
    let li = document.createElement('li');
    li.textContent = data;
    ul.append(li);
}




// Написать функцию, которая getWeekDay, которая выводит день недели, исходя из даты

// let myDate = new Date();

// function getMonthText(daaaate) {
//     let month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Октябрь", "Ноябрь", "Декабрь"]

//     return month[daaaate.getMonth()]
// }
// console.log(myDate);

// console.log(getMonthText(myDate));
// //Написать функцию, которая удаляет все элементы числового массива, не входящих в условие
// arrayNumber = [1, 3, 4, 6, 7, 2, 3, 7, 8, 9, 0, 8, 6, 5];

// function filterRangeInPlace(arr, a, b) {

//     for (let i = 0; i < arr.length; i++) {

//         let value = arr[i]

//         if (a > value || b < value) {
//             arr.splice(i--, 1);

//         }
//     }
// }
// filterRangeInPlace(arrayNumber, 2, 5);
// console.log(arrayNumber);


//Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:
// let myObject = {
//     className: 'open menu menu'
// }

// function removeClass(obj, cls) {
//     let myArray = obj.className.split(' ');

//     for (let i = 0; i < myArray.length; i++) {
//         if (myArray[i] === cls) {
//             myArray.splice(i, 1)
//             i--
//         }
//     }

//     obj.className = myArray.join(" ");
// }

// removeClass(myObject, "menu");
// console.log(myObject);

// Написать функцию, которая преобразует строку вида list-style-image в listStyleImage
// function camelize(str) {
//     let array = str.split("-");

//     for (let i = 0; i < array.length; i++) {
//         if (i === 0) continue;

//         array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
//     }
//     return array.join("");

// }
// console.log(camelize("list-style-image"));
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