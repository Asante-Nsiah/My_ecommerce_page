
const thumbnails = document.querySelectorAll('.thumbnail');
const display = document.getElementById('display');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const addToCart = document.getElementById('addToCart');
const update = document.getElementById('update');
const calculate = document.getElementById('calculate')

thumbnails.forEach(el => {
    el.addEventListener('click', event => {
        const displayImg = document.querySelector('#display img')
        displayImg.setAttribute('src', event.target.getAttribute('src'))
    })
})

let counter = 0

plus.addEventListener('click', event => {
    counter += 1
    update.textContent = counter
    calculate.innerText = update.textContent * 125
})

minus.addEventListener('click', event => {
    counter -= 1
    if(counter <= 0) {
        counter = 1
    }
    update.textContent = counter
    calculate.innerText = calculate.innerText - 125
    if(calculate.innerText === 125){
        calculate.innerText = '';

    }
})
