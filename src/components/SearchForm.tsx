import { Row, Col } from 'antd'
import SearchIcon from '@ant-design/icons/SearchOutlined'
import { searchAPI } from '../api/api'
import { Typography, Input } from './common.styles'
import { CompanyType } from '../types'

type SearchFormProps = {
  setResults: (results: CompanyType[]) => void
}

export const SearchForm: React.FC<SearchFormProps> = ({ setResults }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    searchAPI(event.target.value).then((response) => {
      setResults(response.data.bestMatches)
    })
  }
  return (
    <Row>
      <Col span={24}>
        <Typography>Company Name</Typography>
        <Input
          size="large"
          addonBefore={<SearchIcon />}
          placeholder="Example: Apple"
          onChange={handleChange}
        />
      </Col>
    </Row>
  )
}
