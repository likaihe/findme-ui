import { Modal } from 'react-bootstrap'
import { ModalProps } from 'react-bootstrap/Modal'
import { FC } from 'react'
import { LoginContainer } from '../../containers/LoginContainer'

export const LoginModal: FC<ModalProps> = (props) => {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <LoginContainer />
    </Modal>
  )
}
