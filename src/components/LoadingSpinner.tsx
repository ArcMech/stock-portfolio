import { Spin } from 'antd'
import { SpinContainer } from './common.styles'

export const LoadingSpinner = () => (
  <SpinContainer>
    <Spin size="large" tip="If time is money... are ATM&#39;s time machines?" />
  </SpinContainer>
)
