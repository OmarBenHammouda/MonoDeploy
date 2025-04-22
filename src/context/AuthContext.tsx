// ** React Imports
import { createContext, useEffect, useState, ReactNode } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Axios
import axios from 'axios'

// ** Config
import authConfig from 'src/configs/auth'

// ** Types
import { AuthValuesType, RegisterParams, LoginParams, GoogleLoginParams, ErrCallbackType } from './types'

// ** Service
import AuthService from './services'

// ** Defaults
const defaultProvider: AuthValuesType = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  isInitialized: false,
  login: () => Promise.resolve(),
  loginWithGoogle: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  setIsInitialized: () => Boolean,
  register: () => Promise.resolve()
}

const AuthContext = createContext(defaultProvider)

type Props = {
  children: ReactNode
}

const AuthProvider = ({ children }: Props) => {
  // ** States
  const [user, setUser] = useState<any>(defaultProvider.user)
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading)
  const [isInitialized, setIsInitialized] = useState<boolean>(defaultProvider.isInitialized)

  // ** Instances
  const service = new AuthService()

  // ** Hooks
  const router = useRouter()

  useEffect(() => {
    const initAuth = async (): Promise<void> => {
      setIsInitialized(true)
      const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)!
      if (storedToken) {
        setLoading(true)
        axios.defaults.headers.common.token = storedToken
        await service
          .me()
          .then(async user => {
            setLoading(false)
            setUser({ ...user })
          })
          .catch(() => {
            router.replace('/')
            localStorage.removeItem('userData')
            localStorage.removeItem('refreshToken')
            localStorage.removeItem('accessToken')
            setUser(null)
            setLoading(false)
          })
      } else {
        setLoading(false)
      }
    }
    initAuth()
  }, [])

  const handleLogin = (params: LoginParams, errorCallback?: ErrCallbackType) => {
    setLoading(true)
    service
      .login({ ...params, accountType: 'user' })
      .then(async res => {
        window.localStorage.setItem(authConfig.storageTokenKeyName, res.token)
        window.localStorage.setItem(authConfig.storageRefreshTokenKeyName, res.refreshToken)
        axios.defaults.headers.common.token = res.token
      })
      .then(() => {
        service.me().then(async user => {
          const returnUrl = router.query.returnUrl

          setUser({ ...user })
          window.localStorage.setItem('userData', JSON.stringify(user))

          const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'

          router.replace(redirectURL as string)
          setLoading(false)
        })
      })
      .catch(err => {
        setLoading(false)
        if (errorCallback) errorCallback(err)
      })
  }

  const handleGoogleLogin = (params: GoogleLoginParams, errorCallback?: ErrCallbackType) => {
    setLoading(true)
    service
      .signinWithGoogle({ ...params })
      .then(async res => {
        window.localStorage.setItem(authConfig.storageTokenKeyName, res.token)
        window.localStorage.setItem(authConfig.storageRefreshTokenKeyName, res.refreshToken)
        axios.defaults.headers.common.token = res.token
      })
      .then(() => {
        service.me().then(async user => {
          const returnUrl = router.query.returnUrl

          setUser({ ...user })
          window.localStorage.setItem('userData', JSON.stringify(user))

          const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'

          router.replace(redirectURL as string)
          setLoading(false)
        })
      })
      .catch(err => {
        setLoading(false)
        if (errorCallback) errorCallback(err)
      })
  }

  const handleLogout = async () => {
    service.logout()
    setUser(null)
    setIsInitialized(false)
    window.localStorage.removeItem('userData')
    window.localStorage.removeItem(authConfig.storageTokenKeyName)
    router.push('/login')
  }

  const handleRegister = (params: RegisterParams, errorCallback?: ErrCallbackType) => {
    setLoading(true)
    service
      .signUp(params)
      .then(() => {
        router.push('/login')
        setLoading(false)

        // handleLogin({ email: params.email, password: params.password })
      })
      .catch((err: { [key: string]: string }) => {
        errorCallback ? errorCallback(err) : null
        setLoading(false)
      })
  }

  const values = {
    user,

    loading,
    setUser,
    setLoading,
    isInitialized,
    setIsInitialized,
    login: handleLogin,
    loginWithGoogle: handleGoogleLogin,
    logout: handleLogout,
    register: handleRegister
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
