/* eslint-disable lines-around-comment */
// ** MUI Imports
import Button from '@mui/material/Button'

// ** Images Imports
//@ts-ignore
import mainBanner from 'src/assets/images/main-banner.png'
//@ts-ignore
import secBanner from 'src/assets/images/scondary-banner.png'
//@ts-ignore
import shape from 'src/assets/images/main-banner-shape.png'
import i18next from 'i18next'

// ** Third Party Libraries
import clsx from 'clsx'

// ** Translations
import Translations from 'src/layouts/components/Translations'

const FirstLevel = () => {
  // ** Hook
  const language = i18next.language

  return (
    <div>
      <div className='relative -z-99 bg-navy'>
        <img
          src={mainBanner.src}
          style={{ ...(language === 'ar' ? { transform: 'rotateY(180deg)' } : {}) }}
          className='absolute -z-10 bottom-0 -left-160 lg:left-0 h-[400px] lg:h-full lg:w-full'
          alt='main_banner'
        />
        <img
          src={shape.src}
          style={{ ...(language === 'ar' ? { transform: 'rotateY(180deg)' } : {}) }}
          className={clsx(
            language === 'ar' ? 'right-0' : 'left-0',
            'absolute top-0  -z-10 h-[600px] w-[500px] lg:h-full lg:w-3/5 xl:w-1/2'
          )}
          alt='shape_banner'
        />
        <div className='h-screen px-8 lg:px-40 2xl:px-40 flex lg:items-center w-full '>
          <div className='mt-64 lg:-mt-56 xl:-mt-64 flex flex-col gap-20'>
            <div className='w-7/12'>
              <text className='text-4xl lg:text-6xl xl:text-8xl text-white font-700 tracking-normal leading-8 lg:leading-10 xl:leading-[115px] capitalize'>
                <Translations text='Accelerate your success' />
              </text>
            </div>
            <div className='w-full lg:w-5/12'>
              <text className='text-14 lg:text-16 xl:text-19 text-white font-400'>
                <Translations text='We help businesses of all sizes grow faster and conﬁdently with custom software, dedicated teams and expert guidance.' />
              </text>
            </div>
            <div>
              <Button
                size='large'
                variant='outlined'
                className='text-white font-600 capitalize border-3 border-white rounded-0'
              >
                <Translations text="Let's disscuss your needs" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='relative'>
        <img
          style={{ ...(language === 'ar' ? { transform: 'rotateY(180deg)' } : {}) }}
          src={secBanner.src}
          className={clsx(
            language === 'ar' ? 'left-0' : 'right-0',
            'absolute h-[300px] lg:h-full w-full lg:w-3/5 xl:w-fit lg:top-0 bottom-0'
          )}
          alt='secondary_banner'
        />
        <div className='bg-primary h-[700px] px-8 xl:px-40 2xl:px-40 flex lg:items-center w-full'>
          <div className='flex flex-col gap-20 pt-10 lg:pt-0'>
            <div className='w-full lg:w-6/12'>
              <text className='text-2xl lg:text-24 2xl:text-36 text-white font-700'>
                <Translations text='Struggling to Find the Right talent, Manage Scope or Launch Quickly?' />
              </text>
            </div>
            <div className='w-full lg:w-5/12'>
              <text className='text-14 lg:text-16 2xl:text-19 text-white font-400'>
                <Translations text='Bridge the gap between your vision and reality through our skilled developers, seamless team integration and proven processes.' />
              </text>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstLevel
