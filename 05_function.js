// 1. function

// 유명 함수
// 함수 선언
function myfunc() {
  // 실행문 코드
  console.log('안녕, javascrip')
}
// 함수 호출
myfunc()

// 익명 함수
// 변수 선언
const sayhello = function () {
  console.log('hello~~~')
}
sayhello()


// 2. 매개변수 Parameter
function printmessage(message) {
  console.log(message)
}

printmessage('하하하')
printmessage('호호호')


// 3. 기본 Parameter (es6)
function showInfo(title, name = '제시카') {
  console.log(`${title} by ${name}`)
}

showInfo('안녕하세요', '엘리스')
showInfo('풍경')


// 4. Rest Parameter / Spread 연산자 (es6)
function printAll(...items) {
  // for (let i = 0; i < items.length; i++) {
  //   console.log(items[i])
  // }

  for (const item of items) {
    console.log(item)
  }
}

printAll('봄', '여름', '가을', '겨울')


// 5. Scope

// global변수 (전역변수)
let movie = 'hahaha'

function paintMovie() {
  // local변수 (지역변수)
  let mymovie = '호빵맨'
  console.log(mymovie)
  console.log(movie)
}

paintMovie()


// 6. Return
function plus(a, b) {
  return a + b
  console.log('안녕하세요')
}

const result = plus(5, 10)
console.log(result)


// 7.Callback 함수
const call = function (myname, printPicaso, printJobs) {
  if (myname === 'Picaso') {
    printPicaso()
  } else {
    printJobs()
  }
}

const printPicaso = function () {
  console.log('나는 Picaso')
}

const printJobs = function () {
  console.log('나는 Jobs')
}

call('Jobs', printPicaso, printJobs)


// 8. Arrow 함수
// const add = function (a, b) {
//   return a + b
// }

const add = (a, b) => a + b

const sum = add(5, 8)
console.log(sum)


// function sayHello() {
//   console.log('Hello')
//   console.log(this)
// }

const sayHello = () => {
  console.log(this)
}

sayHello()




