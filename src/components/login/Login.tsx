import { Modal } from 'react-bootstrap'
import { LoginForm } from './LoginForm'
import { ErrorBoundary } from '../ErrorBoundary'
import FacebookLogin from 'react-facebook-login'
import { FC } from 'react'

export type LoginType = {
  facebookCallback: (response: any) => void
}

export const Login: FC<LoginType> = ({ facebookCallback }) => (
  <>
    <Modal.Header closeButton>
      <Modal.Title id='contained-modal-title-vcenter'>
        Login
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <LoginForm />
    </Modal.Body>
    <Modal.Footer>
      <ErrorBoundary>
        <FacebookLogin
          appId='653164480023492'
          autoLoad={false}
          fields='name,email,picture'
          callback={facebookCallback}
          cssClass='my-facebook-button-class'
          icon='fa-facebook'
        />
      </ErrorBoundary>
    </Modal.Footer>
  </>
)
