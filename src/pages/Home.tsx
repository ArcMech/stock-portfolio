import { useState } from 'react'
import { Row, Col } from 'antd'
import { SearchForm, SearchList, PortfolioTable } from '../components'

export const Home = () => {
  const [results, setResults] = useState<any[]>([])

  return (
    <Row gutter={40}>
      <Col span={12}>
        <SearchForm setResults={setResults} />
        <SearchList results={results} />
      </Col>
      <Col span={12}>
        <PortfolioTable />
      </Col>
    </Row>
  )
}
