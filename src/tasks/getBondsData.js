const http = {
  queryCount: 0,
  itemCount: 0,
  post: ({ body }) => {
    http.queryCount++
    http.itemCount += body.length

    return Promise.resolve(
      body.map((isin) => ({
        isin,
        data: { amt: 1 }
      }))
    )
  }
}

const cache = {}

const getBondsData = async ({ date, isins }) => {
  const result = []
  const foundIsin = new Set()

  isins.forEach((isin) => {
    if (cache[date] && cache[date][isin]) {
      foundIsin.add(isin)
      result.push(cache[date][isin])
    }
  })

  if (result.length === isins.length) {
    return result
  }

  const isinsToFetch = isins.filter((isin) => !foundIsin.has(isin))
  const fetchedData = await http.post({
    url: `/bonds/${date}`,
    body: isinsToFetch
  })

  if (!cache[date]) {
    cache[date] = {}
  }

  fetchedData.forEach((item) => (cache[date][item.isin] = item))

  return getBondsData({ date, isins })
}

module.exports = getBondsData
