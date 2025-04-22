// ** Images Imports
//@ts-ignore
import Img1 from 'src/assets/images/why_accelerant_1.png'

//@ts-ignore
import Img2 from 'src/assets/images/why_accelerant_2.png'

//@ts-ignore
import Img3 from 'src/assets/images/why_accelerant_3.png'

//@ts-ignore
import Img4 from 'src/assets/images/why_accelerant_4.png'

//@ts-ignore
import Arrow1 from 'src/assets/images/arrow_1.svg'

//@ts-ignore
import Arrow2 from 'src/assets/images/arrow_2.svg'

//@ts-ignore
import Arrow3 from 'src/assets/images/arrow_3.svg'

// ** Translations
import Translations from 'src/layouts/components/Translations'
import i18next from 'i18next'

const SixthLevel = () => {
  // ** Constants
  const isArabic = i18next.language === 'ar'

  return (
    <div className='flex flex-col py-20 lg:py-32'>
      <div className='flex flex-col items-start px-8 xl:px-40 2xl:px-40 my-10'>
        <text className='text-4xl lg:text-5xl xl:text-7xl text-primary font-700'>
          <Translations text='Why' />
        </text>
        <text className='text-4xl lg:text-5xl xl:text-7xl text-primary font-700'>
          <Translations text='Accelerant ?' />
        </text>
      </div>
      <div className='relative bg-secondary flex flex-col lg:flex-row'>
        <div className='w-full lg:w-3/5'>
          <img
            src={Img1.src}
            style={{ ...(isArabic ? { transform: 'rotateY(180deg)' } : {}) }}
            className='w-full h-[400px] lg:h-fit lg-w-1/2 xl:w-fit'
            alt='why_accelerant_1'
          />
        </div>
        <div className='w-full lg:w-2/3 xl:w-2/5 flex flex-col items-center justify-center px-20 lg:px-0 py-32 lg:py-0'>
          <text className='text-24 lg:text-28 xl:text-32 text-white font-600'>
            <Translations text='Certified and experienced developers and project managers.' />
          </text>
        </div>
        <img
          style={{ ...(isArabic ? { transform: 'rotateY(180deg)' } : {}) }}
          src={Arrow1.src}
          className='absolute z-99 lg:-bottom-88 lg:right-1/4 -bottom-64 right-1/3 w-1/3 lg:w-1/5 xl:w-fit lg:h-fit'
          alt='arrow_1'
        />
      </div>
      <div className='relative bg-primary flex flex-col lg:flex-row'>
        <div className='w-full lg:w-2/3 xl:w-2/5 flex flex-col items-center justify-center px-20 lg:px-0 py-32 lg:py-0'>
          <text className='text-24 lg:text-28 xl:text-32 text-white font-600'>
            <Translations text='Proven methodologies and established track record.' />
          </text>
        </div>
        <div className='w-full lg:w-3/5 flex justify-end'>
          <img
            style={{ ...(isArabic ? { transform: 'rotateY(180deg)' } : {}) }}
            src={Img2.src}
            className='w-full h-[400px] lg:h-fit lg-w-1/2 xl:w-fit'
            alt='why_accelerant_1'
          />
        </div>
        <img
          src={Arrow2.src}
          className='absolute z-99 -bottom-40 lg:-bottom-52 left-1/3 w-1/4 lg:w-1/5 xl:w-fit'
          alt='arrow_2'
        />
      </div>
      <div className='relative bg-light flex flex-col lg:flex-row'>
        {/* Mobile View */}
        <div className='w-full text-center px-20 pt-44 lg:hidden'>
          <text className='text-24 text-white font-600'>
            <Translations text='Unwavering commitment to customer satisfaction.' />
          </text>
        </div>
        <div className='w-full flex justify-center py-20 lg:hidden'>
          <img src={Img3.src} className='h-[400px]' alt='why_accelerant_1' />
        </div>
        {/* Desktop View */}
        <div className='lg:w-2/5 xl:w-3/5 hidden lg:flex'>
          <img src={Img3.src} className='lg:w-full lg:h-[500px] xl:w-fit' alt='why_accelerant_1' />
        </div>
        <div className='lg:w-3/5 xl:w-2/5 hidden lg:flex flex-col items-center justify-center'>
          <text className='lg:text-28 xl:text-32 text-white font-600'>
            <Translations text='Unwavering commitment to customer satisfaction.' />
          </text>
        </div>
        <img src={Arrow3.src} className='absolute -bottom-52 z-99 left-1/3 lg:right-1/4 lg:w-2/12 xl:w-fit w-1/4' alt='arrow_3' />
      </div>
      <div className='bg-white flex flex-col lg:flex-row'>
        {/* Mobile View */}
        <div className='flex justify-end w-full lg:hidden'>
          <img
            style={{ ...(isArabic ? { transform: 'rotateY(180deg)' } : {}) }}
            src={Img4.src}
            className='w-screen h-[400px]'
            alt='why_accelerant_1'
          />
        </div>
        <div className='lg:hidden flex text-center py-32'>
          <text className='text-24 text-primary font-600'>
            <Translations text='Transparent communication and collaborative approach.' />.
          </text>
        </div>
        {/* Desktop View */}
        <div className='hidden lg:w-3/5 px-32 lg:flex flex-col items-center justify-center'>
          <text className='lg:text-28 xl:text-32 text-primary font-600'>
            <Translations text='Transparent communication and collaborative approach.' />
          </text>
        </div>
        <div className='hidden lg:flex justify-end lg:w-3/5'>
          <img
            style={{ ...(isArabic ? { transform: 'rotateY(180deg)' } : {}) }}
            src={Img4.src}
            className='lg:w-full lg:h-[500px] xl:w-fit'
            alt='why_accelerant_1'
          />
        </div>
      </div>
    </div>
  )
}

export default SixthLevel
