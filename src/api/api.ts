import axios from 'axios'
import { CompanyRequest } from '../types'

const apiKey = process.env.REACT_APP_API_KEY

export const getOverviewAPI = (symbol: string) =>
  axios(
    `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${apiKey}`
  )

export const searchAPI = (keyword: string) =>
  axios.get<CompanyRequest>(
    `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=${apiKey}`
  )
