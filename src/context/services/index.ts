// ** Configs
import axios from 'axios'
import authServiceConfig from './configs'
import { RegisterParams, UserUpdatePayload } from '../types'

// ** Types
type LoginResponse = {
  auth: boolean
  refreshToken: string
  token: string
}

type GoogleSigninPayload = {
  email: string
  picture: string
  given_name: string
  family_name: string
}
export default class AuthService {
  async login(data: { password: string; email: string; accountType: 'user' }): Promise<LoginResponse> {
    return axios.post(authServiceConfig.signIn, data).then(res => {
      return res.data as LoginResponse
    })
  }

  async me(): Promise<any> {
    return axios.get(authServiceConfig.me).then(res => {
      return res.data as any
    })
  }

  async update(id: number, data: UserUpdatePayload): Promise<any> {
    return axios.put(authServiceConfig.update + id, data).then(res => {
      return res.data as any
    })
  }

  async logout(): Promise<any> {
    return axios.get(authServiceConfig.logout).then(res => {
      return res.data as any
    })
  }

  async signUp(data: RegisterParams): Promise<any> {
    return axios.post(authServiceConfig.signUp, data).then(res => {
      return res.data as any
    })
  }

  async uploadImage(formData: FormData): Promise<{ path: string }> {
    return axios.post(authServiceConfig.uploads, formData).then(res => {
      return res.data as { path: string }
    })
  }

  async signinWithGoogle(data: GoogleSigninPayload): Promise<LoginResponse> {
    return axios.post(authServiceConfig.googleSignin, data).then(res => {
      return res.data as LoginResponse
    })
  }
}
