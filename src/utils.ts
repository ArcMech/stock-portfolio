import { CompanyType } from './types'

export const isDuplicateInPortfolio = (
  newCompany: CompanyType,
  array: CompanyType[]
) => {
  return Boolean(
    array.find((company) => newCompany['1. symbol'] === company['1. symbol'])
  )
}

const billion = 1_000_000_000_000

export const transformToBilions = (value: string) => {
  const number = +value
  if (isNaN(number)) return value

  return `${(number / billion).toFixed(2)} bln`
}
