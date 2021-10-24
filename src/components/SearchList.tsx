import { List, Button, Skeleton } from 'antd'
import PlusIcon from '@ant-design/icons/PlusOutlined'
import { CompanyType } from '../types'
import { ListItem, Typography, Container } from './common.styles'

type SearchListProps = {
  results: CompanyType[]
}

export const SearchList: React.FC<SearchListProps> = ({ results }) => {
  const renderItem = (item: CompanyType) => (
    <ListItem actions={[<Button size="small" icon={<PlusIcon />} />]}>
      <Skeleton avatar={false} title={false} loading={false} active>
        <div>{item?.['2. name'] || ''}</div>
      </Skeleton>
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
