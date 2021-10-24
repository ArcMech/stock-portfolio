import { CompanyType } from './types'

export const isDuplicateInPortfolio = (
  newCompany: CompanyType,
  array: CompanyType[]
) => {
  return Boolean(
    array.find((company) => newCompany['1. symbol'] === company['1. symbol'])
  )
}
