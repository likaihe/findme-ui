import { login } from '../services/loginService'
import { Login } from '../components/login/Login'

export const LoginContainer = () => {
  const facebookCallback = async (response: any) => {
    const result = await login(response.accessToken)
    console.log('login result ' + result)
  }
  return (
    <Login facebookCallback={facebookCallback} />
  )
}
