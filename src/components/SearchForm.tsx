import { Row, Col } from 'antd'
import SearchIcon from '@ant-design/icons/SearchOutlined'
import { Typography, Input } from './common.styles'

export const SearchForm = () => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
  }
  return (
    <Row>
      <Col span={24}>
        <Typography>Company name</Typography>
        <Input
          addonBefore={<SearchIcon />}
          placeholder="Search for..."
          onChange={handleChange}
        />
      </Col>
    </Row>
  )
}
