import { List, Button, Skeleton } from 'antd'
import PlusIcon from '@ant-design/icons/PlusOutlined'
import { ListItem, Typography, Container } from './common.styles'

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
]

export const SearchList = () => {
  const renderItem = (item: React.ReactNode) => (
    <ListItem actions={[<Button size="small" icon={<PlusIcon />} />]}>
      <Skeleton avatar={false} title={false} loading={false} active>
        <div>{item}</div>
      </Skeleton>
    </ListItem>
  )
  return (
    <Container>
      <Typography>Search Results</Typography>
      <List
        loading={false}
        itemLayout="horizontal"
        dataSource={data}
        bordered
        size="small"
        renderItem={renderItem}
      />
    </Container>
  )
}
