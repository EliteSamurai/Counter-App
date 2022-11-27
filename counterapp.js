
let count = 0;

let countHtml = document.getElementById("countEl");
let saveEl = document.getElementById("save-el");


function increment() {
    count = count + 1;
    countHtml.textContent = count;
}

function save() {
    console.log(count);
    let entries = count + " - ";
    saveEl.textContent += entries;
    countHtml.textContent = 0;
    count = 0;
}







    