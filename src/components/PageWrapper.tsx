import { FC, ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactNode
}

const Wrapper = styled.div`
  min-height: 800px;
  margin: 0 40px 0 40px;
`

export const PageWrapper: FC<Props> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
)
