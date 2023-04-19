const shoppingList = [
    'pomodori',
    'funghi',
    'latte',
    'carne',
    'caffè',
    'peperoni',
    'biscotti',
    'salmone',
    'pasta',
];

const shoppingUl = document.querySelector("#list");
let i = 0

function addProduct() {
    while (i < shoppingList.length) {
        shoppingUl.innerHTML += `<li>${shoppingList[i]}</li>`;
        i++
    }
}
addProduct();

function addLi() {
    const newElement = document.querySelector("input").value;
    shoppingList.push(newElement);
    addProduct();
}
