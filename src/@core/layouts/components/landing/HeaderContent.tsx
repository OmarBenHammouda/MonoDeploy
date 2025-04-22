// ** Next Imports
import { useRouter } from 'next/router'

// ** MUI Imports
import Button from '@mui/material/Button'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

// ** Third Party Library
import clsx from 'clsx'

// ** Custom Components
import LanguageDropdown from '../shared-components/LanguageDropdown'
import Translations from 'src/layouts/components/Translations'

const HeaderContent = () => {
  // ** Hooks
  const router = useRouter()

  // ** Hooks
  // ** init trigger
  const trigger = useScrollTrigger({
    threshold: 50,
    disableHysteresis: true
  })

  return (
    <div className='h-50 w-full py-10 lg:py-12'>
      <div className='flex items-center justify-between'>
        <div className='cursor-pointer' onClick={() => router.replace('/')}>
          <img
            src={trigger ? '/images/svgs/colored-logo.svg' : '/images/svgs/logo.svg'}
            alt='main_logo'
            className='w-[170px] h-[30px] lg:w-[220px] lg:h-[30px] xl:w-full xl:h-full'
          />
        </div>
        <div className='hidden lg:flex lg:w-3/4 xl:w-1/2 items-center justify-between px-10'>
          <Button
            variant='text'
            className={clsx(trigger ? 'text-primary' : 'text-white', 'rounded-0 text-12 font-600 capitalize whitespace-nowrap')}
          >
            <Translations text='Solutions' />
          </Button>
          <Button
            variant='text'
            className={clsx(trigger ? 'text-primary' : 'text-white', 'rounded-0 text-12 font-600 capitalize whitespace-nowrap')}
          >
            <Translations text='Products' />
          </Button>
          <LanguageDropdown />
          <Button
            variant='text'
            className={clsx(trigger ? 'text-primary' : 'text-white', 'rounded-0 text-12 font-600 capitalize whitespace-nowrap')}
          >
            <Translations text='About us' />
          </Button>
          <Button variant='contained' color='secondary' className='rounded-0 font-600 capitalize whitespace-nowrap'>
            <Translations text='Book a Call' />
          </Button>
        </div>
        <div className='flex lg:hidden w-1/2 justify-end'>
          <IconButton className='-mt-5'>
            <MenuIcon fontSize='medium' className='text-white' />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default HeaderContent
