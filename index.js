
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  let x = fromN
  if (x === toN) return toN
  return fromN + sum((fromN + 1), toN)
}

console.log(sum(2, 5))

module.exports = sum;