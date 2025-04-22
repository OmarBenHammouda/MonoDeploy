// ** MUI Imports
import { Theme, styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** Translations
import i18next from 'i18next'
import Translations from 'src/layouts/components/Translations'

// ** Icon Imports
import CloseIcon from '@mui/icons-material/Close'

// ** Images Imports
import RocketIcon from 'src/assets/images/RocketIcon'
import MultiIcon from 'src/assets/images/MultiIcon'
import IdeaIcon from 'src/assets/images/IdeaIcon'
import PrecisionIcon from 'src/assets/images/PrecisionIcon'

//@ts-ignore
import mvpBg from 'src/assets/images/modal_1.png'

//@ts-ignore
import precisionBg from 'src/assets/images/modal_2.png'

//@ts-ignore
import multiBg from 'src/assets/images/modal_3.png'

//@ts-ignore
import ideaBg from 'src/assets/images/modal_4.png'

const Container = styled(Box, { shouldForwardProp: prop => prop !== 'color' })(({ theme }) => ({
  display: 'flex',
  maxHeight: '100vh',
  overflow: 'clip',
  [theme!.breakpoints.down('md')]: {
    flexDirection: 'column',
    overflow: 'scroll'
  }
}))

const Text = styled(Typography, { shouldForwardProp: prop => prop !== 'last' })(
  ({ theme, last }: { theme?: Theme; last?: boolean }) => ({
    fontSize: 28,
    fontWeight: 600,
    color: last ? theme!.palette.primary.main : 'white',
    [theme!.breakpoints.down('xl')]: {
      fontSize: 20
    },
    [theme!.breakpoints.down('md')]: {
      fontSize: 18
    }
  })
)

const Title = styled(Typography, { shouldForwardProp: prop => prop !== 'last' })(
  ({ theme, last }: { theme?: Theme; last?: number }) => ({
    fontSize: 42,
    fontWeight: 600,
    color: last ? theme!.palette.primary.main : 'white',
    [theme!.breakpoints.down('xl')]: {
      fontSize: 32
    },
    [theme!.breakpoints.down('md')]: {
      fontSize: 22
    }
  })
)

// ** Props
type Props = {
  open: boolean
  setOpen: (value: boolean) => void
  id: number
  setId: (value: number) => void
}

const data = [
  {
    id: 1,
    icon: <RocketIcon fill='#FFF' />,
    title: 'Build your MVP with ease, with us',
    text: 'Launching a startup is like going on an exciting journey, full of ups and downs. We get it because, like you, we’ve been through the tough parts of it: the hard work, the long hours and the responsibility to those who believe in you, including yourself. The good news is, you don’t have to do it all alone. At Accelerant, we believe that success often comes with the right support and we’re here for you. We’ve seen it all, so we know exactly what you need and how to get it done fast, not wasting your time or money. Building your Minimum Viable Product (MVP) is super important. It’s like a quick test drive for your business, letting you learn about your customers and convince investors with the least effort. We are determined to bring your vision to life (on a budget) and build you a strong MVP that takes your startup to the next level ! Your success is not just a goal, it’s our shared destination and we’re on this journey together.',
    image: mvpBg.src,
    color: 'primary.light'
  },
  {
    id: 3,
    icon: <MultiIcon fill='#FFF' />,
    title: 'Improve and extend your business smartly',
    text: 'We are totally aware that running a business is incredibly challenging, especially post-pandemic, where each investment and decision carries significant weight. This includes hiring new people, finding experts, all while dealing with budget cuts… That’s where our Dedicated Team comes in. We’re like your secret weapon, a special group that works only on your goals. Think of us as an extension of your own team, but even better! No more dealing with tons of different people. You’ll have just one contact person who speaks your language. We’ll cut out the confusion and delays, focusing on what matters: making your vision a reality. With our Dedicated Team, you’re in charge. You do what you’re best at, and we’ll help you keep your customers happy !',
    image: multiBg.src,
    color: 'primary.main'
  },
  {
    id: 4,
    icon: <IdeaIcon />,
    title: 'Get the right support from a true ally',
    text: 'Looking for the right consultant goes beyond just technical skills. It’s like searching for a true partner. Someone who understands your business, puts your needs first and values honesty and clear communication in building a solid relationship. At Accelerant, we don’t settle for being your typical consultants; we’re your allies. We believe in being upfront and truthful, even if it doesn’t give us a quick win. Why? Because we understand that trust and transparency are the bedrock of lasting partnerships. We’re not just here to clock in and out. We invest ourselves in every project, tailoring open-source solutions to match your unique needs and challenges. Whether it’s choosing, implementing, customizing, or providing ongoing support, we’re with you every step of the way. Our aim? To not just meet but exceed your expectations and help you unleash the full potential of your business. Let’s talk ! We’re confident we can build a partnership that drives success.',
    image: ideaBg.src,
    color: 'grey-100'
  },
  {
    id: 2,
    icon: <PrecisionIcon fill='#FFF' />,
    title: 'Maximize ROI with Precision Project Scope',
    text: 'In today’s rapidly evolving market, it’s crucial for businesses like yours to constantly innovate and adapt. Whether it’s optimizing existing services, venturing into new product lines, or simply seeking a fresh perspective, we understand the pressure to stay ahead of the curve and exceed customer expectations. Our proven expertise in project management, coupled with our deep technical skills, positions us as your trusted partner in bringing your vision to life. We have a proven track record of delivering successful projects on time and within budget, ensuring a smooth and collaborative journey from concept to completion. We believe in a client-centric approach, where open collaboration is paramount. We insist in maintaining clear and consistent communication throughout the process, ensuring you’re informed and involved every step of the way, right up to successful delivery. Tell us your needs, and we’ll work closely with you to translate them into tangible solutions !',
    image: precisionBg.src,
    color: 'secondary.main'
  }
]

const SecondLevelDialog = (props: Props) => {
  // ** Props
  const { open, setOpen, id, setId } = props

  // ** Hooks
  const small = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const large = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'))

  // ** Constants
  const isArabic = i18next.language === 'ar'
  const item = data.find(item => item.id === id)
  const icon = data.find(item => item.id === id)?.icon

  // ** Functions
  const handleClose = () => setOpen(false)

  const goBackSlider = () => {
    if (id === 1) setId(4)
    else {
      const value = id - 1
      setId(value)
    }
  }

  const goForwardSlider = () => {
    if (id === 4) setId(1)
    else {
      const value = id + 1
      setId(value)
    }
  }

  return (
    <Dialog fullScreen onClose={handleClose} open={open}>
      <Container bgcolor={item!.color}>
        {small ? (
          <Box width={large ? '35%' : '100%'}>
            <img src={item?.image} alt='background1' width='100%' height='400px' style={{ objectFit: 'cover' }} />
            <IconButton
              color='primary'
              aria-label='close'
              onClick={handleClose}
              sx={{ position: 'absolute', top: 20, right: 30 }}
            >
              <CloseIcon sx={{ color: 'white' }} />
            </IconButton>
          </Box>
        ) : null}
        {large ? (
          <Box width={large ? '75%' : '100%'} p={20} display='flex' flexDirection='column' gap={10}>
            {id && icon}
            {/* @ts-ignore */}
            <Title last={item!.id === 4}>
              <Translations text={item!.title} />
            </Title>
            {/* @ts-ignore */}
            <Text last={item!.id === 4} fontSize={28}>
              <Translations text={item!.text} />
            </Text>
          </Box>
        ) : null}
        {large ? (
          <Box width={large ? '35%' : '100%'}>
            <img src={item?.image} alt='background1' width='100%' height='100%' />
            <IconButton
              color='primary'
              aria-label='close'
              onClick={handleClose}
              sx={{ position: 'absolute', top: 20, right: 30 }}
            >
              <CloseIcon sx={{ color: 'white' }} />
            </IconButton>
          </Box>
        ) : null}
        {small ? (
          <Box width={large ? '75%' : '100%'} p={5} display='flex' flexDirection='column' gap={10}>
            {id && icon}
            {/* @ts-ignore */}
            <Title last={item!.id === 4}>
              <Translations text={item!.title} />
            </Title>
            {/* @ts-ignore */}
            <Text last={item!.id === 4}>
              <Translations text={item!.text} />
            </Text>
          </Box>
        ) : null}
        <Box sx={{ position: 'absolute', width: 'fit-content', bottom: 20, right: 30, display: 'flex', gap: 5 }}>
          <IconButton
            color='primary'
            onClick={goBackSlider}
            sx={{ height: 30, width: 30, bgcolor: 'primary.main', '&:hover': { bgcolor: 'primary.light' } }}
          >
            <img
              style={{ ...(isArabic ? { transform: 'rotateY(180deg)' } : {}) }}
              src='/images/svgs/chevron_left_white.svg'
              alt='chevron'
              className='w-20 h-20'
            />
          </IconButton>
          <IconButton
            color='primary'
            onClick={goForwardSlider}
            sx={{ height: 30, width: 30, bgcolor: 'primary.main', '&:hover': { bgcolor: 'primary.light' } }}
          >
            <img
              style={{ ...(isArabic ? { transform: 'rotateY(180deg)' } : {}) }}
              src='/images/svgs/chevron_right_white.svg'
              alt='chevron'
              className='w-20 h-20'
            />
          </IconButton>
        </Box>
      </Container>
    </Dialog>
  )
}

export default SecondLevelDialog
