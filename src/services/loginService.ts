import axios from 'axios'
import { User } from '../types/types'



export const login = async (token: string): Promise<User | undefined> => {
  const headers = {
    'Content-Type': 'application/json',
    'access-token': token,
  }
  try {
    const response = await axios.post('http://localhost:8080/login', null, { headers })
    if (response.status >= 400) {
      console.log('error')
    }
    console.log(response)
    return response.data as User
  } catch (err) {
    //  todo handle it
    console.log(`cannot reach the service: ${err}`)
  }


}
