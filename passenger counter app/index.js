// document.getElementById("count-el").innerText = 100

// define variabel count = 0
// menangkap increment button
// mengubah count saat incremtn button ditekan
// menampilkan count baru ke count-el di html

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0
function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    concat = count + " - " 
    saveEl.textContent += concat

    count = 0
    countEl.textContent = count
}
