import { Row, Col } from 'antd'
import { SearchForm, PortfolioTable } from '../components'

export const Home = () => {
  return (
    <Row>
      <Col span={12}>
        <SearchForm />
      </Col>
      <Col span={12}>
        <PortfolioTable />
      </Col>
    </Row>
  )
}
