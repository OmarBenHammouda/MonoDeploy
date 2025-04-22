export type ErrCallbackType = (err: { [key: string]: string }) => void

export type LoginParams = {
  email: string
  password: string
}

export type GoogleLoginParams = {
  email: string
  picture: string
  given_name: string
  family_name: string
}

export type RegisterParams = {
  email: string
  firstname: string
  lastname: string
  gender: string
  phone: string
  password: string
  status: 'active' | 'inactive'
  accountType: 'user'
}

export type UserUpdatePayload = {
  firstname: string
  lastname: string
  phone: string
  email: string
  image_url: string
  gender: string
  cin: string
  description: string
}

export type AuthValuesType = {
  loading: boolean
  setLoading: (value: boolean) => void
  logout: () => void
  isInitialized: boolean
  user: any
  setUser: (value: any) => void
  setIsInitialized: (value: boolean) => void
  login: (params: LoginParams, errorCallback?: ErrCallbackType) => void
  loginWithGoogle: (params: GoogleLoginParams, errorCallback?: ErrCallbackType) => void
  register: (params: RegisterParams, errorCallback?: ErrCallbackType) => void
}
