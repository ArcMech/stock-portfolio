import { Layout } from 'antd'
import { Header, Content } from './PageLayout.styles'

export const PageLayout: React.FC = ({ children }) => {
  return (
    <Layout className="layout">
      <Header>
        <div>SDH Frontend Homework</div>
      </Header>
      <Content>{children}</Content>
    </Layout>
  )
}
