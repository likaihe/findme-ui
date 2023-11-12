import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { FC } from 'react'
import { LoginModal } from './login/LoginModal'
import { User } from '../types/types'

export type HeaderType = {
  isShowLoginModel: boolean;
  handleSearchClick: () => void;
  handleShowModel: (isShow: boolean) => void;
  user: User | undefined;
}
export const Header: FC<HeaderType> = ({ isShowLoginModel, handleSearchClick, user, handleShowModel }) => (
  (
    <>
      <Navbar expand='lg' className='bg-body-tertiary'>
        <Container>
          <Navbar.Brand href='#home'>findme</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <LinkContainer to='/'>
                <Nav.Link>Jobs</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/about'>
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/dashboard'>
                <Nav.Link>Dashboard</Nav.Link>
              </LinkContainer>
              <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Form className='d-flex'>
            <Form.Control
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
            />
            <Button variant='outline-success' onClick={handleSearchClick}>Search</Button>
          </Form>
          {user == undefined ? <Button variant='outline-success' onClick={() => handleShowModel(true)}>login</Button> :
            <p>
              {`wellcome ${user.email}`}
            </p>}

        </Container>
      </Navbar>
      <LoginModal show={isShowLoginModel} onHide={() => handleShowModel(false)} />
    </>
  )
)
