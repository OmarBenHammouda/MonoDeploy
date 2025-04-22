// ** React Imports

// ** Next Imports
import { useRouter } from 'next/router'

// ** Spinner Import
import Spinner from 'src/@core/components/spinner'

// ** Demo Imports
import Landing from 'src/views/pages/landing'

/**
 *  Set Home URL based on User Roles
 */
export const getHomeRoute = (role: string) => {
  if (role === 'client') return '/acl'
  else return '/home'
}

const Home = () => {
  // ** Hooks
  const router = useRouter()

  return router.isReady ? <Landing /> : <Spinner />
}

// Home.getLayout = (page: React.ReactNode) => <BlankLayout>{page}</BlankLayout>;

Home.guestGuard = false
Home.authGuard = false

export default Home
