// ** React Imports
import { useState, SyntheticEvent, Fragment } from 'react'

// ** Next Import
import { useRouter } from 'next/router'
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'

// ** Icons Imports
import CogOutline from 'mdi-material-ui/CogOutline'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import MessageOutline from 'mdi-material-ui/MessageOutline'

// ** Context
import { useAuth } from 'src/hooks/useAuth'
import { Typography } from '@mui/material'

// ** Styled Components
const Img = styled('img')({
  boxSizing: 'border-box'
})

const UserDropdown = () => {
  // ** States
  const [anchorEl, setAnchorEl] = useState<Element | null>(null)

  // ** Hooks
  const router = useRouter()
  const { logout, user } = useAuth()

  // ** Functions
  const handleDropdownOpen = (event: SyntheticEvent) => {
    if (!user) router.replace('/login')
    else setAnchorEl(event.currentTarget)
  }

  const handleDropdownClose = (url?: string) => {
    if (url) {
      router.push(url)
    }
    setAnchorEl(null)
  }

  const styles = {
    py: 2,
    px: 4,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    color: 'text.primary',
    textDecoration: 'none',
    '& svg': {
      fontSize: '1.375rem',
      color: 'text.secondary'
    }
  }

  const handleLogout = () => {
    logout()
    handleDropdownClose()
  }

  return (
    <Fragment>
      <IconButton
        onClick={handleDropdownOpen}
        className='h-[45px] w-[80px] flex items-center gap-8 md:gap-12 md:pl-8 md:w-[105px] md:h-[56px]'
        sx={{
          borderRadius: '26px',
          '&:hover': { backgroundColor: '#FFF' },
          backgroundColor: theme => (anchorEl ? theme.palette.primary.main : '#FFF')
        }}
      >
        <Img src='/images/svgs/bars.svg' />
        <div className='flex items-center justify-center w-[30px] h-[30px] md:w-[40px] md:h-[40px] bg-primary rounded-full'>
          <Img src='/images/svgs/toolbar.svg' />
        </div>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleDropdownClose()}
        sx={{ '& .MuiMenu-paper': { width: 230, marginTop: 4, borderRadius: '22px' } }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <div className='px-10 pt-2 pb-4'>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              sx={{
                width: '40px',
                height: '40px',
                backgroundColor: theme => theme.palette.primary.main,
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Img src='/images/svgs/toolbar.svg' />
            </Box>
            <Box
              sx={{
                display: 'flex',
                marginLeft: 3,
                alignItems: 'flex-start',
                flexDirection: 'column'
              }}
            >
              <Link href='/profile' passHref onClick={() => setAnchorEl(null)}>
                <Typography sx={{ fontSize: 14, cursor: 'pointer' }}>
                  {user?.firstname + ' ' + user?.lastname}
                </Typography>
              </Link>
              <Typography sx={{ fontSize: 14 }}>{user?.email}</Typography>
            </Box>
          </Box>
        </div>
        <Divider sx={{ mt: 0, mb: 1 }} />
        <MenuItem sx={{ p: 0 }}>
          <Link passHref href='/bookings' onClick={() => setAnchorEl(null)}>
            <Box sx={styles}>
              <AccountOutline sx={{ marginRight: 2 }} />
              <text>My Bookings</text>
            </Box>
          </Link>
        </MenuItem>
        <MenuItem sx={{ p: 0 }}>
          <Box sx={styles}>
            <EmailOutline sx={{ marginRight: 2 }} />
            <text>My Pay</text>
          </Box>
        </MenuItem>
        <MenuItem sx={{ p: 0 }}>
          <Box sx={styles}>
            <MessageOutline sx={{ marginRight: 2 }} />
            <text>Support Case</text>
          </Box>
        </MenuItem>
        <MenuItem sx={{ p: 0 }} onClick={handleLogout}>
          <Box sx={styles}>
            <CogOutline sx={{ marginRight: 2 }} />
            <text>Logout</text>
          </Box>
        </MenuItem>
      </Menu>
    </Fragment>
  )
}

export default UserDropdown
