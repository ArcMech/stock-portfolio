import styled from 'styled-components/macro'
import { Col } from 'antd'

export const BorderedCol = styled(Col)`
  border-right: 1px solid #d9d9d9;

  @media (max-width: 992px) {
    border-right: none;
  }
`
