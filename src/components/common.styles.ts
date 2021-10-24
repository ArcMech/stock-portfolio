import { List, Input as AntInput, Typography as AntTypography } from 'antd'
import styled from 'styled-components/macro'

export const ListItem = styled(List.Item)`
  &&& {
    border-bottom: 0;
    @media (max-width: 576px) {
      padding: 8px;
      padding-right: 0;
    }
  }
  background-color: #fff;

  &:hover {
    background-color: #f8f8f8;
  }
`
export const Container = styled.div`
  margin: 24px 0;
`

export const Typography = styled(AntTypography)`
  margin-bottom: 4px;
`

export const Input = styled(AntInput)`
  .ant-input-group-addon {
    border-top-left-radius: 22px;
    border-bottom-left-radius: 22px;
  }
  input {
    border-top-right-radius: 22px;
    border-bottom-right-radius: 22px;
  }
`

export const SpinContainer = styled.div`
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #f8f8f8;
  border-radius: 4px;
  min-height: 400px;
  width: 100%;
`
