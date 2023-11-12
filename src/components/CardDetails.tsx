import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { FC } from 'react'
import { LinkContainer } from 'react-router-bootstrap'

export type CardDetailsProps = {
  title: string
  content: string
  link: string
  iconLink?: string
}

export const CardDetails: FC<CardDetailsProps> = ({ title, content, link,  }) => (
  <Card style={{ width: '16rem' }}>
    <Card.Img variant='top' src="https://autofile.co.nz/uploads/pictures/2020/01/thumb761/AUTOFILE_trade-me-starts-listing-offshore-cars_2020-01-24_11-19-061.png" />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {content}
      </Card.Text>
      <LinkContainer to={link}>
        <Button variant='primary'>Details</Button>
      </LinkContainer>
    </Card.Body>
  </Card>
)
