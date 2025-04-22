const baseUrl = process.env.BASE_URL
const authServiceConfig = {
  signIn: `${baseUrl}auth/signin`,
  signUp: `${baseUrl}auth/signup`,
  me: `${baseUrl}auth/me`,
  refresh: `${baseUrl}auth/refresh`,
  logout: `${baseUrl}auth/logout`,
  updatePassword: `${baseUrl}auth/updatepassword`,
  forgetPassword: `${baseUrl}auth/forget-password`,
  resetPassword: `${baseUrl}auth/reset-password`,
  googleSignin: `${baseUrl}auth/google/customer/signin`,
  uploads: `${baseUrl}uploads`,
  update: `${baseUrl}users/`
}

export default authServiceConfig
