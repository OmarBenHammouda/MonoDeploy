// ** React Imports
import { Fragment, SyntheticEvent, useEffect, useState } from 'react'

// ** MUI Imports
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import useScrollTrigger from '@mui/material/useScrollTrigger'

// ** Third Party Import
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'

// ** Type Import
import { useSettings } from 'src/@core/hooks/useSettings'
import Translations from 'src/layouts/components/Translations'

// interface Props {
//   settings: Settings
//   saveSettings: (values: Settings) => void
// }

const LanguageDropdown = () => {
  // ** State
  const [anchorEl, setAnchorEl] = useState<any>(null)

  // ** Hook
  const { saveSettings, settings } = useSettings()
  const { i18n } = useTranslation()
  const trigger = useScrollTrigger({
    threshold: 50,
    disableHysteresis: true
  })

  // ** Vars
  const { direction } = settings

  useEffect(() => {
    if (i18n.language === 'ar' && direction === 'ltr') {
      saveSettings({ ...settings, direction: 'ltr' })
    } else if (i18n.language === 'ar' || direction === 'rtl') {
      saveSettings({ ...settings, direction: 'rtl' })
    } else {
      saveSettings({ ...settings, direction: 'ltr' })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language, direction])

  const handleLangDropdownOpen = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget)
  }

  const handleLangDropdownClose = () => {
    setAnchorEl(null)
  }

  const handleLangItemClick = (lang: 'en' | 'fr' | 'ar') => {
    i18n.changeLanguage(lang)
    handleLangDropdownClose()
  }

  return (
    <Fragment>
      <Button
        className={clsx(trigger ? 'text-primary' : 'text-white', 'rounded-0 text-12 font-600 capitalize')}
        color='inherit'
        aria-haspopup='true'
        aria-controls='customized-menu'
        onClick={handleLangDropdownOpen}
      >
        <Translations text='Language' />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleLangDropdownClose}
        sx={{ '& .MuiMenu-paper': { mt: 4, minWidth: 130 } }}
        anchorOrigin={{ vertical: 'bottom', horizontal: direction === 'ltr' ? 'right' : 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: direction === 'ltr' ? 'right' : 'left' }}
      >
        <MenuItem
          sx={{ py: 2 }}
          selected={i18n.language === 'en'}
          onClick={() => {
            handleLangItemClick('en')
            saveSettings({ ...settings, direction: 'ltr' })
          }}
        >
          <Translations text='English' />
        </MenuItem>
        {/* <MenuItem
          sx={{ py: 2 }}
          selected={i18n.language === 'fr'}
          onClick={() => {
            handleLangItemClick('fr')
            saveSettings({ ...settings, direction: 'ltr' })
          }}
        >
          French
        </MenuItem> */}
        <MenuItem
          sx={{ py: 2 }}
          selected={i18n.language === 'ar'}
          onClick={() => {
            handleLangItemClick('ar')
            saveSettings({ ...settings, direction: 'rtl' })
          }}
        >
          <Translations text='Arabic' />
        </MenuItem>
      </Menu>
    </Fragment>
  )
}

export default LanguageDropdown
