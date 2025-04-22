// ** MUI Imports
import { styled } from '@mui/material/styles'

// ** Third Party Library
import { useKeenSlider } from 'keen-slider/react'
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'
import Translations from 'src/layouts/components/Translations'

// ** Images Imports
//@ts-ignore
import bg from 'src/assets/images/faded-bg.png'

// ** Styled Image
const HoverableImage = styled('img')(() => ({
  filter: 'grayscale(1)',
  '&:hover': {
    filter: 'grayscale(0)'
  },
  cursor: 'pointer'
}))

const ThirdLevel = () => {
  // ** Hooks
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 3,
      spacing: 15
    }
  })

  return (
    <div className='relative px-8 lg:px-40 2xl:px-200 lg:py-80'>
      <img src={bg.src} alt='background' className='absolute -z-1 top-0 right-0 h-full' />
      <div className='flex flex-col items-center xl:gap-20 mb-20'>
        <text className='text-2xl lg:text-7xl xl:text-4xl text-primary font-700'>
          <Translations text='Bringing Visions To Life' />
        </text>
        <text className='text-14 lg:text-18 xl:text-xl text-primary font-400'>
          <Translations text='We proudly partnered with promising businesses like yours and had the privilege to collaborate hand in hand to optimize their processes and bring their visions to life.' />
        </text>
      </div>
      <div className='flex lg:hidden'>
        <KeenSliderWrapper>
          <div ref={ref} className='keen-slider'>
            <div className='keen-slider__slide py-5'>
              <HoverableImage src='/images/pages/almada.png' alt='almada_company' className='w-64' />
            </div>
            <div className='keen-slider__slide py-5'>
              <HoverableImage src='/images/pages/tayssir.png' alt='almada_company' className='w-120 h-80' />
            </div>
            <div className='keen-slider__slide py-5'>
              <HoverableImage src='/images/pages/alnjah.png' alt='almada_company' className='w-120 h-80' />
            </div>
            <div className='keen-slider__slide py-5'>
              <HoverableImage src='/images/pages/nahjmadina.png' alt='almada_company' className='w-84' />
            </div>
            <div className='keen-slider__slide py-5'>
              <HoverableImage src='/images/pages/rabeea.png' alt='almada_company' className='w-120 h-80' />
            </div>
            <div className='keen-slider__slide py-5'>
              <HoverableImage src='/images/pages/access_tls.png' alt='almada_company' className='w-120 h-80' />
            </div>
            <div className='keen-slider__slide py-5'>
              <HoverableImage src='/images/pages/leoni.png' alt='almada_company' className='w-120 h-40' />
            </div>
            <div className='keen-slider__slide py-5'>
              <HoverableImage src='/images/pages/pragma.png' alt='almada_company' className='w-120 h-40' />
            </div>
            <div className='keen-slider__slide py-5'>
              <HoverableImage src='/images/pages/anonymous.png' alt='almada_company' className='w-120 h-40' />
            </div>
            <div className='keen-slider__slide py-5'>
              <HoverableImage src='/images/pages/addresstreet.png' alt='almada_company' className='w-120 h-60' />
            </div>
            <div className='keen-slider__slide py-5'>
              <HoverableImage src='/images/pages/deloitte.png' alt='almada_company' className='w-120 h-40' />
            </div>
            <div className='keen-slider__slide py-5'>
              <HoverableImage src='/images/pages/datascale.png' alt='almada_company' className='w-120 h-40' />
            </div>
            <div className='keen-slider__slide py-5'>
              <HoverableImage src='/images/pages/takwinland.png' alt='almada_company' className='w-120 h-40' />
            </div>
            <div className='keen-slider__slide py-5'>
              <HoverableImage src='/images/pages/premier_cloud.png' alt='almada_company' className='w-120 h-40' />
            </div>
          </div>
        </KeenSliderWrapper>
      </div>
      <div className='hidden lg:flex flex-col gap-20'>
        <div className='flex items-center justify-between grayscale'>
          <HoverableImage src='/images/pages/almada.png' alt='almada_company' className='w-64' />
          <HoverableImage src='/images/pages/tayssir.png' alt='almada_company' className='w-120' />
          <HoverableImage src='/images/pages/alnjah.png' alt='almada_company' className='w-120' />
          <HoverableImage src='/images/pages/nahjmadina.png' alt='almada_company' className='w-84' />
          <HoverableImage src='/images/pages/rabeea.png' alt='almada_company' className='w-120' />
        </div>
        <div className='flex items-center justify-between'>
          <HoverableImage src='/images/pages/access_tls.png' alt='almada_company' className='w-120' />
          <HoverableImage src='/images/pages/leoni.png' alt='almada_company' className='w-120' />
          <HoverableImage src='/images/pages/pragma.png' alt='almada_company' className='w-120' />
          <HoverableImage src='/images/pages/anonymous.png' alt='almada_company' className='w-120' />
          <HoverableImage src='/images/pages/addresstreet.png' alt='almada_company' className='w-120' />
        </div>
        <div className='flex items-center justify-center lg:gap-40'>
          <HoverableImage src='/images/pages/deloitte.png' alt='almada_company' className='w-120' />
          <HoverableImage src='/images/pages/datascale.png' alt='almada_company' className='w-120' />
          <HoverableImage src='/images/pages/takwinland.png' alt='almada_company' className='w-120' />
          <HoverableImage src='/images/pages/premier_cloud.png' alt='almada_company' className='w-120' />
        </div>
      </div>
    </div>
  )
}

export default ThirdLevel
