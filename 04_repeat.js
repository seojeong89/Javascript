// 반복문
// 조건이 참일 때 실행

let i = 3

while (i > 0) {
  console.log(`i는 ${i}`)
  i--
}



// for
// (변수초기화; 조건; 증감식)

for (let j = 3; j > 0; j--) {
  console.log(`j는 ${j}`)
}

for (let k = 1; k <= 3; k++) {
  console.log(k)
}

const day = ['월', '화', '수', '목', '금']

for (let index = 0; index < day.length; index++) {
  // const element = array[index];
  console.log(day[index])
}



// break, continue
// 0 ~ 10 -> 0 ~ 7 까지만 출력 : break

for (let a = 0; a <= 10; a++) {
  if (a > 7) {
    break
  }
  console.log(a)
}


// 0 ~ 10 -> 홀수만 출력 : continue

for (let b = 1; b <= 10; b++) {
  if (b % 2 === 0) {
    continue
  }
  console.log(b)
}