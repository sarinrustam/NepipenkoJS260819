'use strict';

function highlight(table) {

    let tbody = table.getElementsByTagName('tbody')[0];
    let trs = tbody.getElementsByTagName('tr');

    // let cellTarget = document.querySelectorAll('[data-available]');
    // const cellProperty = document.q

    // for (let currentCell of cellTarget) {
    //     console.log(currentCell);
    //     if (JSON.parse(currentCell.dataset.available)) {
    //         currentCell.classList.add('available')
    //     }

    // }

    let a = 0;
    for (let item of trs) {
        const cellHasAvailable = item.cells[3].dataset.available;
        const cellGender = item.cells[2];
        const cellAge = item.cells[1];

        console.log(cellGender);
        //Поставит класс для всего <tr>, в зависимости от data-available ячейки Status
        if (cellHasAvailable) {
            if (JSON.parse(cellHasAvailable)) {
                item.classList.add('available');
            }
        } else {
            //Ставит prorerty - hidden, если такого аттрибута нет совсем
            item.hidden = true;
        }
        //Добавит класс male or female, в зависимости от ячейки Gender
        if (cellGender.innerHTML === "m") {
            item.classList.add('male')
        } else {
            item.classList.add('female')
        }
        //Добавит инлайн стиль, если Age < 18
        if (cellAge.innerHTML < "18") {
            item.style.textDecoration = "line-through";
        }

        a++;


    }
}

highlight(document.querySelector('.js-teachers'))