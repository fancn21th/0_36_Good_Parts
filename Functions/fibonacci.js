let count = 0
const fibonacci = n => {
  console.log(`Step ${count++} : ${n}`)
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2)
}
const n = 10
console.log(`fibonacci of ${n} is ${fibonacci(n)} and it is called ${count} times`)
