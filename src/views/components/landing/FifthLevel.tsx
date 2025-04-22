// ** Third Party Library
import { useKeenSlider } from 'keen-slider/react'
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'
import Translations from 'src/layouts/components/Translations'

const sliders = [
  {
    id: 1,
    title: 'Reduce Costs',
    text: 'Access skilled talent at competitive rates compared to local markets.',
    image: '/images/svgs/cost.svg'
  },
  {
    id: 2,
    title: 'Scale Seamlessly',
    text: 'Grow your team effortlessly as your needs evolve.',
    image: '/images/svgs/scale.svg'
  },
  {
    id: 3,
    title: 'Enjoy Peace Of Mind',
    text: 'Benefit from dedicated project management and transparent communication.',
    image: '/images/svgs/enjoy.svg'
  },
  {
    id: 4,
    title: 'Accelerate Time To Market',
    text: 'Agile development, dedicated teams and efficient processes speed up your launch.',
    image: '/images/svgs/time.svg'
  },
  {
    id: 5,
    title: 'Build Better Software',
    text: 'Leverage top-quality developers with cutting-edge technology skills.',
    image: '/images/svgs/software.svg'
  }
]

const FifthLevel = () => {
  // ** Hooks
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1.5,
      spacing: 15
    }
  })

  return (
    <div className='bg-primary flex flex-col gap-40 px-2 xl:px-40 2xl:px-40 py-20 lg:py-32'>
      <div className='flex flex-col justify-center items-center'>
        <text className='text-2xl lg:text-4xl xl:text-7xl text-white font-700'>
          <Translations text='Experience Accelerant' />
        </text>
        <text className='text-2xl lg:text-4xl xl:text-7xl text-white font-700'>
          <Translations text='Advantages' />
        </text>
      </div>
      <KeenSliderWrapper>
        <div className='w-full lg:px-20 xl:px-120'>
          <div ref={ref} className='keen-slider'>
            {sliders.map((item, index) => (
              <div key={index} className='keen-slider__slide py-5'>
                <div className='bg-white h-256 lg:h-128 xl:h-144 p-16 flex flex-col gap-10'>
                  <img src={item.image} alt='slider_images' className='w-32 h-32' />
                  <div className='flex flex-col justify-between'>
                    <text className='text-primary font-600 lg:text-16 xl:text-20'>
                      <Translations text={item.title} />
                    </text>
                    <text className='text-primary font-400 lg:text-14 xl:text-16'>
                      <Translations text={item.text} />
                    </text>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </KeenSliderWrapper>
    </div>
  )
}

export default FifthLevel
