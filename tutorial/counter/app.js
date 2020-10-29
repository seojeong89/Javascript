const price = document.querySelector('.price')
const count = document.querySelector('.count')
const sum = document.querySelector('.sum')
const btns = document.querySelectorAll('button')
// const plus = document.querySelector('.plus')
// const minus = document.querySelector('.minus')
// const reset = document.querySelector('.reset')

const unit_price = 15000
let num = 1

price.textContent = unit_price
count.textContent = num
sum.textContent = unit_price * num


function printotalprice() {
  count.textContent = num
  sum.textContent = unit_price * num
}

btns.forEach(btn => {
  btn.addEventListener('click', function (e) {
    // console.log(e.target.className)
    if (e.target.className === 'plus') {
      num++
      printotalprice()
    } else if (e.target.className === 'minus') {
      num--
      if (num <= 1) {
        num = 1
      }
      printotalprice()
    } else {
      num = 1
      printotalprice()
    }
  })
})


// plus.addEventListener('click', function () {
//   num++
//   printotalprice()
// })

// minus.addEventListener('click', function () {
//   num--
//   if (num <= 1) {
//     num = 1
//   }
//   printotalprice()
// })

// reset.addEventListener('click', function () {
//   num = 1
//   printotalprice()
// })