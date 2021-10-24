export const getOverviewAPI = (symbol: string) =>
  fetch(
    `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${process.env.API_KEY}`
  )

export const searchAPI = (keyword: string) =>
  fetch(
    `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=demo`
  )
