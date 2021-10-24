import styled from 'styled-components/macro'
import { Layout } from 'antd'

const { Content: AntContent, Header: AntHeader } = Layout

export const Header = styled(AntHeader)`
  color: #fff;
  padding: 0 24px;
`

export const Content = styled(AntContent)`
  min-height: calc(100vh - 64px);
  padding: 24px 40px;
`
