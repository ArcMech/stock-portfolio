import { List, Button } from 'antd'
import PlusIcon from '@ant-design/icons/PlusOutlined'
import { CompanyType } from '../types'
import { ListItem, Typography, Container } from './common.styles'

type SearchListProps = {
  results: CompanyType[]
  handleAddToPorfolio: (result: CompanyType) => void
}

export const SearchList: React.FC<SearchListProps> = ({
  results,
  handleAddToPorfolio,
}) => {
  const renderItem = (item: CompanyType) => (
    <ListItem
      actions={[
        <Button
          size="small"
          onClick={() => handleAddToPorfolio(item)}
          icon={<PlusIcon />}
        />,
      ]}
    >
      <div>{item?.['2. name'] || ''}</div>
    </ListItem>
  )
  return (
    <Container>
      <Typography>Search Results</Typography>
      <List
        loading={false}
        itemLayout="horizontal"
        dataSource={results || []}
        bordered
        size="small"
        renderItem={renderItem}
      />
    </Container>
  )
}
