const contents = document.querySelectorAll('.contents')

for (let i = 0; i < contents.length; i++) {
  contents[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}
