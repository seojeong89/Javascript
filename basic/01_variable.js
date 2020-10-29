console.log('hahaha')

// variable 변수
// var, let, cnnst
// scope 블록

// 1. var 
// 읽기, 쓰기 가능하다
// 블럭을 무시한다.


{
var name ='John'
console.log(name)
}

console.log(name)

// 2. let
// 읽기, 쓰기 가능하다

{
  let title = 'html'
  console.log(title)

  title = 'css'
  console.log(title)

  title = 'javascript'
  console.log(title)
}

// console.log(title)  // 에러

// 3. const
// 상수, 읽기만 가능, 변하지않는다.

{
  const subject = 'html'
  console.log(subject)

  // const subject = 'css'  // 에러
  // console.log(subject)
}

// 4. 변수의 데이터 타입
// 원시데이터 (primitive) :  Number, string, boolean, null, undefined
// object : 싱글데이터를 묶어놓은 데이터
// function : 일급 객체(first class object)  
// 변수에 담을 수 있다. 
// 함수나 메서드의 인자로 넘길 수 있다.
// 함수나 메서드에서 리턴 할 수 있다.


// number
const num=10
const width=20.5
console.log(`값은 ${num}이고, 타입은 ${typeof num}입니다.`)

const a=1/0
const b=-25/0
const c='html'/10
console.log(a)
console.log(b)
console.log(c)


// string
const firstname='jonh'
const lastname='snow'
const fullname=firstname+lastname
console.log(fullname)
console.log(`${firstname} ${lastname}`)


// null
const fall=null
console.log(`${fall}이고 타입은 ${typeof fall}입니다.`)


// undefined
let winter
console.log(`${winter}이고 타입은 ${typeof winter}입니다.`)


// 5. 동적타입 - 자바스크립트는 runtime(브라우저에서 실행될 때) 상태에서 타입이 정해진다.
// 이러한 동적타입은 위험 ==> typescript

let word='winter'
console.log(`값은 ${word}이고, 타입은${typeof word}`)
word=100
console.log(`값은 ${word}이고, 타입은${typeof word}`)
word='100'+10
console.log(`값은 ${word}이고, 타입은${typeof word}`)
word='100'/'10'
console.log(`값은 ${word}이고, 타입은${typeof word}`)


