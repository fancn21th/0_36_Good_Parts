let count = 0

let memoizer = (memo, fundamental) => {
  const shell = (n) => {
    let result = memo[n]
    if (typeof result !== 'number') {
      result = fundamental(shell, n)
      memo[n] = result
    }
    return result
  }
  return shell
}

const fibonacci = memoizer([0, 1], function(recur, n) {
  console.log(`Step ${count++} : ${n}`)
  return recur(n-1) + recur(n-2)
})

const n = 10
console.log(`fibonacci of ${n} is ${fibonacci(n)} and it is called ${count} times`)
