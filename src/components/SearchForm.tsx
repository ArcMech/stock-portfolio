import { Row, Col, message } from 'antd'
import SearchIcon from '@ant-design/icons/SearchOutlined'
import { searchAPI } from '../api/api'
import { Typography, Input } from './common.styles'
import { CompanyType } from '../types'

type SearchFormProps = {
  setResults: (results: CompanyType[]) => void
  setLoading: (loading: boolean) => void
}

export const SearchForm: React.FC<SearchFormProps> = ({
  setResults,
  setLoading,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true)
    searchAPI(event.target.value)
      .then((response) => {
        setResults(response.data.bestMatches)
        setLoading(false)
      })
      .catch((e) => {
        message.error(`Error: ${e}`)
        setLoading(false)
      })
  }
  return (
    <Row>
      <Col xs={24} sm={24} md={18} lg={18}>
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
