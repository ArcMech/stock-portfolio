import { Button, Table } from 'antd'
import { Link } from 'react-router-dom'
import { Typography, TableWrapper } from './common.styles'
import { AlignCell } from './types'
import { CompanyType } from '../types'

type PortfolioTableProps = {
  portfolios: CompanyType[]
  handleRemoveFromPortfolio: (portfolio: CompanyType) => void
}

export const PortfolioTable: React.FC<PortfolioTableProps> = ({
  portfolios,
  handleRemoveFromPortfolio,
}) => {
  const columns = [
    {
      title: 'Company Name',
      dataIndex: '2. name',
      align: 'center' as AlignCell,
      elipsis: true,
      key: 'name',
      width: '50%',
      render: (text: React.ReactNode, record: CompanyType) => (
        <Button type="link">
          {<Link to={`/${record['1. symbol']}`}>{text}</Link>}
        </Button>
      ),
    },
    {
      title: 'Symbol',
      dataIndex: '1. symbol',
      align: 'center' as AlignCell,
      width: '25%',
      key: 'symbol',
    },
    {
      title: 'Actions',
      key: 'action',
      align: 'center' as AlignCell,
      width: '25%',
      render: (_: React.ReactNode, record: CompanyType) => (
        <Button type="link" onClick={() => handleRemoveFromPortfolio(record)}>
          Remove
        </Button>
      ),
    },
  ]
  return (
    <>
      <Typography>Your Portfolio</Typography>
      <TableWrapper>
        <Table
          bordered
          columns={columns}
          dataSource={portfolios}
          pagination={false}
          rowKey={(portfolios) => portfolios['1. symbol']}
        />
      </TableWrapper>
    </>
  )
}
