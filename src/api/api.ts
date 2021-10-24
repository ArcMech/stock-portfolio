import axios from 'axios'
import { CompanyTypeRequest, OverviewType } from '../types'

const apiKey = process.env.REACT_APP_API_KEY

export const getOverviewAPI = (symbol: string) =>
  axios.get<OverviewType>(
    `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${apiKey}`
  )

export const searchAPI = (keyword: string) =>
  axios.get<CompanyTypeRequest>(
    `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=${apiKey}`
  )
