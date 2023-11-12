import { CardDetails } from '../components/CardDetails'
import { FC, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'


export type Job = {
  title: string
  content: string
  id: string
  iconLink?: string
}


const StyledContainer = styled(Container)`
  padding: 0;
`

const StyledCol = styled(Col)`
  margin-bottom: 5px;
  
`

export const JobsCardContainer: FC = () => {
  const [jobs] = useState<Job[]>([
    { id: '1', content: 'this is job1', title: 'Job1' },
    { id: '2', content: 'this is job2', title: 'Job2' },
    { id: '3', content: 'this is job3', title: 'Job3' },
    { id: '3', content: 'this is job3', title: 'Job3' },
    { id: '3', content: 'this is job3', title: 'Job3' },
    { id: '3', content: 'this is job3', title: 'Job3' },
    { id: '3', content: 'this is job3', title: 'Job3' },
    { id: '3', content: 'this is job3', title: 'Job3' },
    { id: '3', content: 'this is job3', title: 'Job3' },
    { id: '3', content: 'this is job3', title: 'Job3' },
  ])

  return (
    <StyledContainer fluid className='d-flex justify-content-center' >
      <Row>
        {
          jobs.map((j, key) => (
            <StyledCol md='auto' key={key}>
              <CardDetails content={j.content} link={`job/${j.id}`} title={j.title} iconLink={j.iconLink} />
            </StyledCol>
          ))
        }
      </Row>
    </StyledContainer>
  )
}
