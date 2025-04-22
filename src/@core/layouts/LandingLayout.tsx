import { Fab } from '@mui/material'
import { styled } from '@mui/material/styles'

//** Component Import
import ScrollToTop from 'src/@core/components/scroll-to-top'
import Header from './components/landing/Header'
import Footer from './components/landing/Footer'

// ** Theme Config Import
import themeConfig from 'src/configs/themeConfig'

// ** Icons Imports
import ArrowUp from 'mdi-material-ui/ArrowUp'

const LandingLayoutWrapper = styled('div')({
  minHeight: "100vh",
  display: 'flex',
  flexDirection: 'column',
  ...(themeConfig.horizontalMenuAnimation && { overflow: 'clip' })
})

const ContentWrapper = styled('main')(() => ({
  position: 'relative',
  zIndex: 1,
  
  // minHeight: '100vh',
  flexGrow: 1,
  width: '100%',
  backgroundColor: '#F8F7F7',
  transition: 'padding .25s ease-in-out'
}))

const LandingLayout = (props: any) => {
  // ** Props
  const { children, settings, saveSettings, hidden } = props

  return (
    <LandingLayoutWrapper className='layout-wrapper'>
      <Header settings={settings} saveSettings={saveSettings} navHidden={hidden} />
      <ContentWrapper className='layout-page-content'>{children}</ContentWrapper>

      <Footer />

      <ScrollToTop className='mui-fixed'>
        <Fab color='primary' size='small' aria-label='scroll back to top'>
          <ArrowUp />
        </Fab>
      </ScrollToTop>
    </LandingLayoutWrapper>
  )
}

export default LandingLayout
