const users = [{
        name: 'Rustam',
        age: 28
    },
    {
        name: 'Nastya',
        age: 27
    },
    {
        name: 'Spacey',
        age: 6
    },
    {
        name: 'Luna',
        age: 12
    }
]

const table = document.createElement('table');
const thead = createThead(users[0]);
const tbody = document.createElement('tbody');

users.forEach((user) => {
    const tr = document.createElement('tr');
    const rowKeyArr = Object.keys(user);
    rowKeyArr.forEach((key) => {
        const td = document.createElement('td');
        td.innerHTML = user[key]
        tr.appendChild(td);
    })
    tbody.appendChild(tr);
})


table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);
table.addEventListener('click', sortColums);

function sortColums(event) {
    let elem = event.target;
    let type = elem.dataset.type;
    if (!type) {
        return;
    }

    const table = elem.closest('table');
    const tbody = table.querySelector('tbody');
    const rows = [...table.querySelectorAll('tbody tr')];
    rows.sort((tr1, tr2) => {
        const [strOneEl, numOneEl] = tr1.querySelectorAll('td');
        const [strTwoEl, numTwoEl] = tr2.querySelectorAll('td');
        const a = type === 'string' ? strOneEl.innerHTML : Number(numOneEl.innerHTML);
        const b = type === 'string' ? strTwoEl.innerHTML : Number(numTwoEl.innerHTML);
        console.log(a, b)
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    })
    tbody.innerHTML = '';
    tbody.append(...rows);
}

function createThead(user) {
    const thead = document.createElement('thead');
    const headersKeyArr = Object.keys(user);

    headersKeyArr.forEach((key) => {
        const th = document.createElement('th')
        th.innerHTML = key;
        th.dataset.type = typeof user[key];
        thead.appendChild(th);
    })

    return thead;
}