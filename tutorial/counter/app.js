const price = document.querySelector('.price')
const count = document.querySelector('.count')
const sum = document.querySelector('.sum')
const btns = document.querySelectorAll('button')

const unit_price = 15000
const num = 1

price.textContent = unit_price
count.textContent = num
sum.textContent = unit_price * num
