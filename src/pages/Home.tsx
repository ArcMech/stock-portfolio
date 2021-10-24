import { useState } from 'react'
import { Row, Col, message } from 'antd'
import { SearchForm, SearchList, PortfolioTable } from '../components'
import { BorderedCol } from './Home.styles'
import { isDuplicateInPortfolio } from '../utils'
import { CompanyType } from '../types'

type HomeProps = {
  portfolios: CompanyType[]
  setPortfolios: (portfolios: CompanyType[]) => void
}

export const Home: React.FC<HomeProps> = ({ portfolios, setPortfolios }) => {
  const [results, setResults] = useState<CompanyType[]>([])
  const [loading, setLoading] = useState<boolean>(false)

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
      <BorderedCol lg={12} md={24} sm={24} xs={24}>
        <SearchForm setResults={setResults} setLoading={setLoading} />
        <SearchList
          results={results}
          handleAddToPorfolio={handleAddToPorfolio}
          loading={loading}
        />
      </BorderedCol>
      <Col lg={12} md={24} sm={24} xs={24}>
        <PortfolioTable
          portfolios={portfolios}
          handleRemoveFromPortfolio={handleRemoveFromPortfolio}
        />
      </Col>
    </Row>
  )
}
