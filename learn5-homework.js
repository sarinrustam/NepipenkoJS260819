//Сделайте жёлтыми внешние ссылки, добавив им класс external.
let links = document.body.querySelectorAll('a');

console.log(links)

for (let item of links) {
    let href = item.getAttribute('href');

    if (href) {
        console.log(href.indexOf('http:'));
        //Условие на совпадение реализовано разными методами.
        if ((href.indexOf('http:') !== -1 && !href.match('http://internal.com')) || href.match('ftp')) {
            item.classList.add('external')
        }
    }
}