const toString = (num) => num.toFixed(3)

const getPercents = (ratios) => {
  const sum = ratios.reduce((sum, ratio) => sum + parseFloat(ratio), 0)

  if (sum === 0) {
    return ratios.map(() => toString(0))
  }

  const multiplier = 100 / sum

  return ratios.map((ratio) => toString(multiplier * parseFloat(ratio)))
}

module.exports = getPercents
