// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import Button from '@mui/material/Button'

// ** Constants
const companyFirstText = ['Work', 'About us']
const techFirstText = ['Full Stack Apps', 'Artificial Intelligence', 'Data Intensive Apps', 'Open Source']
const servicesFirstText = ['Product Scope', 'MVP Builder', 'Consulting Services', 'Dedicated Teams']
const buildFirstText = ['Play With Pricing', 'Book a Call']
const svgs = ['twitter.svg', 'youtube.svg', 'linkedin.svg', 'facebook.svg']

const Footer = () => {
  // ** Hooks
  //const router = useRouter()

  // ** Constants
  // const home = router.pathname === '/'
  // className={home ? 'sticky left-0 bottom-0' : 'relative'}

  return (
    <div>
      <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center bg-primary lg:h-[400px] w-full px-10 2xl:px-32 xl:px-28 gap-40'>
        <div className='flex flex-col justify-center items-center lg:items-start lg:justify-start gap-20 w-full lg:w-2/12 pt-10 lg:p-0'>
          <img className='w-[250px] h-[60px]' src='/images/svgs/logo.svg' alt='accelerant_logo' />
          <text className='text-white text-16 font-600 text-center lg:text-start'>
            Want to talk about your project ?
          </text>
          <Button
            variant='contained'
            color='secondary'
            className='w-full h-[52px] lg:h-fit lg:w-fit rounded-0 font-600'
          >
            Book a call
          </Button>
        </div>
        <div className='w-full lg:w-2/3 grid grid-cols-4 gap-32 lg:gap-10'>
          <div className='w-full col-span-4 lg:col-span-1 flex flex-col gap-10'>
            <div className='w-full text-center lg:text-start'>
              <text className='text-14 lg:text-12 font-700 text-white mb-5 uppercase'>Global</text>
            </div>
            <div className='w-full grid lg:grid-cols-2 text-center lg:text-start'>
              <div className='w-full flex flex-col gap-10'>
                {companyFirstText?.map((item, index) => (
                  <Link key={index} href='/' passHref>
                    <text className='text-white cursor-pointer hover:underline text-12 lg:text-12 font-300 leading-snug'>
                      {item}
                    </text>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className='w-full col-span-4 lg:col-span-1 flex flex-col gap-10 lg:gap-6'>
            <div className='w-full text-center lg:text-start'>
              <text className='text-14 lg:text-12 font-700 text-white mb-5 uppercase'>Technology</text>
            </div>
            <div className='w-full flex flex-col gap-10 text-center lg:text-start'>
              {techFirstText?.map((item, index) => (
                <Link key={index} href='/' passHref>
                  <text className='text-white cursor-pointer hover:underline text-12 lg:text-12 font-300 leading-snug'>
                    {item}
                  </text>
                </Link>
              ))}
            </div>
          </div>
          <div className='w-full col-span-4 lg:col-span-1 flex flex-col gap-10 lg:gap-6'>
            <div className='w-full text-center lg:text-start'>
              <text className='text-14 lg:text-12 font-700 text-white mb-5 uppercase'>Services</text>
            </div>
            <div className='w-full flex flex-col gap-10 text-center lg:text-start'>
              {servicesFirstText?.map((item, index) => (
                <Link key={index} href='/' passHref>
                  <text className='text-white cursor-pointer hover:underline text-12 lg:text-12 font-300 leading-snug'>
                    {item}
                  </text>
                </Link>
              ))}
            </div>
          </div>
          <div className='w-full col-span-4 lg:col-span-1 flex flex-col gap-10 lg:gap-6'>
            <div className='w-full text-center lg:text-start'>
              <text className='text-14 lg:text-12 font-700 text-white mb-5 uppercase'>Build</text>
            </div>
            <div className='w-full flex flex-col gap-10 text-center lg:text-start'>
              {buildFirstText?.map((item, index) => (
                <Link key={index} href='/' passHref>
                  <text className='text-white cursor-pointer hover:underline text-12 lg:text-12 font-300 leading-snug'>
                    {item}
                  </text>
                </Link>
              ))}
            </div>
          </div>
          <div className='w-full col-span-4 lg:hidden py-5 flex justify-center items-center gap-10'>
            {svgs?.map((path, index) => (
              <img key={index} src={'/images/svgs/' + path} alt='social_media' />
            ))}
          </div>
        </div>
      </div>
      <div className='relative w-full bg-primary text-center py-5'>
        <text className='text-9 lg:text-10 text-white font-400'>© 2024 acceleant all rights reserved.</text>
        <div className='hidden absolute bottom-0 right-40 py-5 lg:flex gap-10 w-fit'>
          {svgs?.map((path, index) => (
            <img key={index} src={'/images/svgs/' + path} alt='social_media' />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer
