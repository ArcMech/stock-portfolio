import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Button, Row, Col, Typography, message } from 'antd'
import { LoadingSpinner } from '../components'
import { getOverviewAPI } from '../api/api'
import { transformToBilions } from '../utils'
import { Empty } from './Details.styles'
import { OverviewType } from '../types'

export const Details = () => {
  const { id } = useParams<{ id: string }>()
  const history = useHistory()

  const [overview, setOverview] = useState<OverviewType>()
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    getOverviewAPI(id)
      .then((response) => {
        setOverview(response.data)
        setLoading(false)
      })
      .catch((e) => {
        message.error(`Error during calling company overview: ${e}`)

        setLoading(false)
      })

    return () => {
      setLoading(false)
      setOverview(undefined)
    }
  }, [id])

  const handleBack = () => {
    history.push('/')
  }

  if (loading) return <LoadingSpinner />

  const renderOverview =
    overview && overview?.['Name'] && !loading ? (
      <Col span={24}>
        <Typography.Title level={3}>{overview['Name']}</Typography.Title>
        <Typography.Paragraph strong>
          Address: {overview['Address']}
        </Typography.Paragraph>
        <Typography.Paragraph strong>
          Market Capitalization:{' '}
          {transformToBilions(overview['MarketCapitalization'])}
        </Typography.Paragraph>
        <Typography.Paragraph>{overview['Description']}</Typography.Paragraph>
      </Col>
    ) : (
      <Empty />
    )

  return (
    <Row gutter={[40, 20]}>
      <Col span={24}>
        <Button size="large" onClick={handleBack}>
          Go Back
        </Button>
      </Col>
      {renderOverview}
    </Row>
  )
}
