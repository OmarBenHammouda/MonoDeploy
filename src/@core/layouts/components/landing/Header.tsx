// ** Next Imports
import { useRouter } from 'next/router'

// ** MUI Import
import { styled } from '@mui/material/styles'
import { Theme } from '@mui/material/styles'
import { useMediaQuery, useScrollTrigger } from '@mui/material'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import MuiToolbar from '@mui/material/Toolbar'

// ** Util Import
import HeaderContent from './HeaderContent'

// ** Styled Components
const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  width: '100%',
  padding: `${theme.spacing(0, 0)} !important`,
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(4)
  },
  [theme.breakpoints.down('xs')]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}))

const Header = (props: any) => {
  // ** Props
  const { settings, saveSettings } = props

  // ** Hooks
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const router = useRouter()

  // ** init trigger
  const trigger = useScrollTrigger({
    threshold: 50,
    disableHysteresis: true
  })

  // ** Constants
  const homePath = router.pathname === '/'

  return (
    <AppBar
      className='layout-navbar-and-nav-container'
      position={trigger ? 'sticky' : 'fixed'}
      elevation={0}
      sx={{
        backgroundColor: theme => (homePath ? 'transparent' : theme.palette.customColors.dark),
        opacity: 1,
        alignItems: 'center',
        color: 'black',
        transition: 'border-bottom 0.5s ease-in-out, backdrop-filter .5s ease-in-out, box-shadow .5s ease-in-out',
        ...(trigger
          ? {
              backgroundColor: 'white'
            }
          : {})
      }}
    >
      <Box
        className='layout-navbar w-11/12'
        sx={{
          borderBottom: theme => `1px solid ${theme.palette.common.white}`,
          backgroundColor: 'transparent'
        }}
      >
        <Toolbar
          className='navbar-content-container'
          sx={{
            minHeight: '60px !important'
          }}
        >
          <HeaderContent {...props} hidden={hidden} settings={settings} saveSettings={saveSettings} />
          <br />
        </Toolbar>
      </Box>
    </AppBar>
  )
}

export default Header
