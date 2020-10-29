// Object 오브젝트
// Javascript의 data
// 상태와 행동을 가진다.
// Phone의 상태 (Properties) -> color, size
// Phone의 행동 (Methods) -> ring, take a picture, play music


// 1. Object

const user = {
  // 키 : 값
  name: 'alice',
  age: 30,
  email: 'alice@naver.com',
  works: [
    { id: 1, title: 'hahaha', price: 10000, like: 50 },
    { id: 2, title: 'rarara', price: 20000, like: 100 },
    { id: 3, title: 'nanana', price: 30000, like: 200 },
  ],

  // login: function () {
  //   console.log('user logged in!')
  // }


  login() {
    console.log('user logged in!')
  },
  logout() {
    console.log('user logged out!')
  },
  goodworks: function () {
    console.log('작품들')
    this.works.forEach(work => {
      console.log(`${work.id}. ${work.title}, ${work.price}원, 좋아요(${work.like})`)
    })
  }
}

console.log(user)
console.log(user.name)
console.log(user.goodworks())

console.log(user.age)

// 수정
user.age = 45

console.log(user.age)

// 타입 확인
console.log(typeof user)

// methods
user.login()
user.logout()
user.goodworks()


// 2. Math Object
console.log(Math)
console.log(Math.PI)

const sum = 9.7
console.log(Math.round(sum))
console.log(Math.floor(sum))
console.log(Math.ceil(sum))
console.log(parseInt(sum))

// random number 
const num = Math.random()
console.log(num)

// 0 ~ 9 사이의 정수 출력
console.log(Math.floor(Math.random() * 10))

// 1 ~ 10 사이의 정수 출력
console.log(Math.floor(Math.random() * 10) + 1)

// 배열 랜덤 출력
const food = ['라면', '김밥', '우동']
const randomNum = Math.floor(Math.random() * food.length)
console.log(food[randomNum])