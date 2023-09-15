const getPercents = require("../tasks/getPercents")

describe("Get Percents Tests", () => {
  it("should work with default data", () => {
    const input = ["1.5", "3", "6", "1.5"]
    const result = ["12.500", "25.000", "50.000", "12.500"]

    expect(getPercents(input)).toEqual(result)
  })

  it("should work with empty input", () => {
    const input = []

    expect(getPercents(input)).toEqual([])
  })

  it("should work with numeric data", () => {
    const input = [1.5, 3, 6, 1.5]
    const result = ["12.500", "25.000", "50.000", "12.500"]

    expect(getPercents(input)).toEqual(result)
  })
})
