import { useContext, useState } from 'react'
import { login } from '../services/loginService'
import { UserContext } from '../context/UserContext'
import { Header } from '../components/Header'

export const HeaderContainer = () => {
  const [modalShow, setModalShow] = useState(false)
  const handleSearchClick = async () => {
    const result = await login('mytoken')
    console.log('result ' + result)
  }
  const user = useContext(UserContext)
  return (
    <Header handleSearchClick={handleSearchClick} isShowLoginModel={modalShow} handleShowModel={setModalShow}
            user={user} />
  )
}
