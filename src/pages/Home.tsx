import { Row, Col } from 'antd'
import { SearchForm, SearchList, PortfolioTable } from '../components'

export const Home = () => {
  return (
    <Row gutter={40}>
      <Col span={12}>
        <SearchForm />
        <SearchList />
      </Col>
      <Col span={12}>
        <PortfolioTable />
      </Col>
    </Row>
  )
}
