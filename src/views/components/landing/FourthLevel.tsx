// ** React Imports
import { useEffect, useState } from 'react'

// ** MUI Imports
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'

// ** Third Party Library
import clsx from 'clsx'
import i18next from 'i18next'
import Translations from 'src/layouts/components/Translations'

// ** Styled Image
const SliderDot = styled('div')(({ theme }) => ({
  border: `solid 3px ${theme.palette.primary.main}`,
  cursor: 'pointer'
}))

const sliders = [
  {
    id: 1,
    title: 'VEYN',
    subTitle: 'Keep your business on the move',
    text: 'Veyn is like your vital connection to smoother, more efficient operations.It provides you with data-driven insights, automates your workflows, and optimizes resource allocation, enabling companies like yours to seize control by navigating disruptions, maximizing profits and satisfying customers. Much like veins carry vital information throughout your body, Veyn seamlessly integrates into your operations, serving as your centralized command center.',
    image: '/images/pages/slider-1.png'
  },
  {
    id: 2,
    title: 'KASB',
    subTitle: 'Make every purchase a win-win',
    text: 'Imagine this: You pop into your neighborhood bakery. You grab your usual bread and delightful croissant, chat with the friendly baker and, surprise! A little bonus finds its way to your pocket: a commission on your purchase. That’s how Kasb works: every Kasb transaction turns your daily essentials into earning opportunities. It’s like having a personalized loyalty program in every shop you visit, only instead of points, you get real cashback.',
    image: '/images/pages/slider-2.png'
  },
  {
    id: 3,
    title: 'FORSTEK',
    subTitle: 'Find your perfect job match',
    text: 'Forstek is a solution aimed to revolutionize mass recruitment for all. No more endless and fruitless searches! If you’re looking for a job, just create your profile, upload your documents, and get instant notifications for opportunities that match your skills. And if you’re a recruiter, enjoy a vast, efficient database with all the info you need, making your job easier and less time-consuming.',
    image: '/images/pages/slider-3.png'
  },
  {
    id: 4,
    title: 'PARCEL DELIVERY',
    subTitle: 'Track your success, Deliver on promises',
    text: 'Parcel Delivery, your all-in-one platform designed to streamline every step of the delivery journey, from pickup to ensuring a satisfied customer at the end. Picture traceable journeys with no more disappearing acts. Everything is crystal clear, from location updates to estimated delivery times. An entirely automated process, from route planning to billing, allows you to focus on what truly matters. And, of course, happy customers and delighted partners who will come back for more.',
    image: '/images/pages/slider-4.png'
  },
  {
    id: 5,
    title: 'CLICK FLYER',
    subTitle: 'Your best deal for smart shopping',
    text: 'Click Flyer is not just an average flyer, it’s smarter and way better. Consider it your super-smart shopping assistant, helping you discover a vast array of products and items. It keeps you informed about the latest deals and discounts, empowering you to make better purchasing decisions that fit your budget. Click Flyer also stands as a great solution for merchants, providing them with a budget-friendly stage to showcase their products. This way, you get to discover all the hidden gems they have to offer.',
    image: '/images/pages/slider-5.png'
  }
]

const FourthLevel = () => {
  // ** State
  const [active, setActive] = useState<number>(1)

  // ** Constants
  const isArabic = i18next.language === 'ar'

  // ** Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setActive(state => {
        if (state === 5) return 1

        return ++state
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  // ** Functions
  const onChangeSlider = (id: number) => setActive(id)

  const goBackSlider = () => {
    if (active === 1) setActive(5)
    else setActive(state => --state)
  }

  const goForwardSlider = () => {
    if (active === 5) setActive(1)
    else setActive(state => ++state)
  }

  return (
    <div className='max-h-fit flex flex-col gap-40 px-0 xl:px-40 2xl:px-40 py-32 lg:py-32'>
      <div className='px-10 xl:w-4/6'>
        <text className='text-3xl lg:text-4xl xl:text-7xl text-primary font-700'>
          <Translations text='Explore A Selection Of Our Innovative Products' />
        </text>
      </div>
      <div className='flex flex-col gap-32'>
        {sliders.map((item, index) => (
          <div
            key={index}
            className={clsx(active !== item.id ? 'hidden' : '', 'flex flex-col lg:flex-row gap-32 items-stretch')}
          >
            <img src={item.image} alt='slider_images' className='w-full h-[300px] lg:w-[600px] lg:h-[500px]' />
            <div className='w-full lg:w-6/12 flex flex-col justify-between lg:px-0 px-10 '>
              <text className='text-gray-500 font-extrabold text-3xl xl:text-4xl'>
                <Translations text={item.title} />
              </text>
              <text className='font-600 text-lg xl:text-xl text-primary'>
                <Translations text={item.subTitle} />
              </text>
              <text className='text-primary text-sm xl:text-lg'>
                <Translations text={item.text} />
              </text>
              <div className='flex items-center gap-5'>
                <text className='text-primary font-600 text-sm xl:text-lg hover:underline cursor-pointer'>
                  <Translations text='Learn more' />
                </text>
                <IconButton>
                  <img src='/images/svgs/chevron_right.svg' alt='chevron' className='w-20 h-20' />
                </IconButton>
              </div>
            </div>
          </div>
        ))}
        <div className='flex items-center justify-center gap-14'>
          <IconButton color='primary' className='bg-primary w-20 h-20' onClick={goBackSlider}>
            <img
              style={{ ...(isArabic ? { transform: 'rotateY(180deg)' } : {}) }}
              src='/images/svgs/chevron_left_white.svg'
              alt='chevron'
              className='w-20 h-20'
            />
          </IconButton>
          {[1, 2, 3, 4, 5].map(item => (
            <SliderDot
              key={item}
              onClick={() => onChangeSlider(item)}
              className={clsx(active === item ? 'bg-primary' : 'bg-transparent', 'rounded-full w-16 h-16')}
            />
          ))}

          <IconButton color='primary' className='bg-primary w-20 h-20' onClick={goForwardSlider}>
            <img
              style={{ ...(isArabic ? { transform: 'rotateY(180deg)' } : {}) }}
              src='/images/svgs/chevron_right_white.svg'
              alt='chevron'
              className='w-20 h-20'
            />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default FourthLevel
