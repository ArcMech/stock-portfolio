import { useState } from 'react'
import { Row, Col, message } from 'antd'
import { SearchForm, SearchList, PortfolioTable } from '../components'
import { isDuplicateInPortfolio } from '../utils'
import { CompanyType } from '../types'

export const Home = () => {
  const [results, setResults] = useState<CompanyType[]>([])
  const [portfolios, setPortfolios] = useState<CompanyType[]>([])

  const handleAddToPorfolio = (company: CompanyType) => {
    const checkIfExist = isDuplicateInPortfolio(company, portfolios)
    if (checkIfExist) {
      message.info('Duplicate')
    } else {
      setPortfolios([company, ...portfolios])
    }
  }

  const handleRemoveFromPortfolio = (company: CompanyType) => {
    const filteredPortfolios = portfolios.filter(
      (portfolio) => portfolio['1. symbol'] !== company['1. symbol']
    )
    setPortfolios([...filteredPortfolios])
  }

  return (
    <Row gutter={40}>
      <Col span={12}>
        <SearchForm setResults={setResults} />
        <SearchList
          results={results}
          handleAddToPorfolio={handleAddToPorfolio}
        />
      </Col>
      <Col span={12}>
        <PortfolioTable
          portfolios={portfolios}
          handleRemoveFromPortfolio={handleRemoveFromPortfolio}
        />
      </Col>
    </Row>
  )
}
