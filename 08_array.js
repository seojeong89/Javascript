// Array 배열

// 1. 배열 만들기
const arr1 = new Array()
console.log(arr1)

const arr2 = [1, 3, 5, 7, 9]
console.log(arr2)

const arr3 = ['what', 'are', 'you', 'doing', '100', 'true']
console.log(arr3)

const arr4 = [
  'a',
  { model: 'apple', price: 1000 },
  { model: 'galaxy', price: 2000 }
]

console.log(arr4)
console.log(arr4[1].model)


// 2. 배열 출력
const books = ['html', 'css', 'javascript']

console.log(books)
console.log(books.length)
console.log(books[0])
console.log(books[books.length - 1])


console.clear()


// 3. loop 출력
// - for문 
for (let i = 0; i < books.length; i++) {
  console.log(books[i])
}

// -for of
for (let book of books) {
  console.log(book)
}

// - foreach
books.forEach(function (item) {
  console.log(item)
})

books.forEach(item => console.log(item))

books.forEach(book => {
  console.log(book + ' new')
})


// 4. 추가, 삭제
// - 뒤에 추가
books.push('jquery')
console.log(books)

books.push('vue')
console.log(books)

// - 앞에 추가
books.unshift('react')
console.log(books)

// - 뒤에 삭제
books.pop()
console.log(books)

// - 앞에 삭제
books.shift()
console.log(books)

// - splice : 지정한 위치 추가, 삭제 
books.splice(2, 1, 'react', 'vue')
console.log(books)

// - 두개의 배열 합치기
const books2 = ['git', 'nodejs']
const newbook = books.concat(books2)
console.log(newbook)


console.clear()


// 5. 검색
console.log(books)
console.log(books.indexOf('react'))

console.log(books.includes('css'))

console.log(books.includes('github'))
