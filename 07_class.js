// 객체 지향 프로그래밍

// class
// - 탬플릿
// - 한번만 선언
// - class에는 데이터가 없다

// Object
// - class의 인스턴스
// - 복수 생성
// - 실제 데이터가 존재



// 1. 클래스 선언
class Car {
  constructor(name, color) {
    // 생성자
    this.name = name  // 필드
    this.color = color  // 필드
  }
  start() {
    console.log(`${this.name} is start `)
  }

  stop() {
    console.log(`${this.name} is stop `)
  }
}

const mycar = new Car('sonata', 'white')

console.log(mycar.name)
console.log(mycar.color)
mycar.start()
mycar.stop()

const oldCar = new Car('pony', 'red')
console.log(oldCar.name)
console.log(oldCar.color)
oldCar.start()
oldCar.stop()



// 2. Getter and Stter
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  get age() {
    return this._age
  }

  set age(value) {
    this._age = value < 0 ? 0 : value
  }
}

const Boy = new Person('Jonh', -2)
console.log(Boy.name)
console.log(Boy.age)



// 3. 상속과 다양성
// extends

class Phone {
  constructor(name, screen, color) {
    this.name = name
    this.screen = screen
    this.color = color
  }

  on() {
    console.log(`${this.name} is turn on!!!!`)
  }

  off() {
    console.log(`${this.name} is turn off~~~~`)
  }
}

class Samsung extends Phone { }
const galaxy = new Samsung('Galaxy 20', 'led', 'blue')
galaxy.on()
galaxy.off()

class Apple extends Phone {
  on() {
    console.log('아이폰이 켜졌습니다.')
  }

  off() {
    console.log('아이폰이 꺼졌습니다.')
  }
}
const iphone = new Apple('iphone x', 'led', 'white')
iphone.on()
iphone.off()