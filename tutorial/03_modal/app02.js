const contents = document.querySelector('.contents')
const modal = document.querySelector('.modal')
const btns = document.querySelectorAll('.btn')

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    contents.classList.toggle('active')
    modal.classList.toggle('active')
  })
})
