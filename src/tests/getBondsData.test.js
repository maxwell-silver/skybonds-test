const getBondsData = require("../tasks/getBondsData")

describe("Get Bonds Data Test", () => {
  it("should work with correct input date", async () => {
    const data = await getBondsData({
      date: 20180120,
      isins: ["XS0971721963", "RU000A0JU4L3"]
    })

    const result = [
      {
        data: {
          amt: 1
        },
        isin: "XS0971721963"
      },
      {
        data: {
          amt: 1
        },
        isin: "RU000A0JU4L3"
      }
    ]

    expect(data).toEqual(result)
  })

  it("should work with incorrect input date: not a string", () => {
    getBondsData({ date: 4, isins: ["2"] }).catch((error) => {
      expect(error instanceof Error).toBe(true)
    })
  })

  it("should work with incorrect input isins: not an array", () => {
    getBondsData({ date: "42", isins: 6 }).catch((error) => {
      expect(error instanceof Error).toBe(true)
    })
  })

  it("should work with incorrect input isins: empty array", () => {
    getBondsData({ date: "92", isins: [] }).catch((error) => {
      expect(error instanceof Error).toBe(true)
    })
  })
})
