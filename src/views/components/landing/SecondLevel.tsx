// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'

// ** Images Imports
import RocketIcon from 'src/assets/images/RocketIcon'
import MultiIcon from 'src/assets/images/MultiIcon'
import IdeaIcon from 'src/assets/images/IdeaIcon'
import PrecisionIcon from 'src/assets/images/PrecisionIcon'
import ChevronIcon from 'src/assets/images/ChevronRight'
import SecondLevelDialog from '../components/SecondLevelDIalog'

// ** Translations
import Translations from 'src/layouts/components/Translations'
import i18next from 'i18next'

// ** Styled Image
const TopHoverableItem = styled('div')(() => ({
  border: '0.5px solid #E0E0E0',
  borderTop: '2px solid #E0E0E0',
  '&:hover': {
    color: 'white !important'
  }
}))

const BottomHoverableItem = styled('div')(() => ({
  border: '0.5px solid #E0E0E0',
  borderBottom: '2px solid #E0E0E0'
}))

const SecondLevel = () => {
  // ** State
  const [open, setOpen] = useState<boolean>(false)
  const [id, setId] = useState<number>(1)

  // ** Constants
  const isArabic = i18next.language === 'ar'

  // ** Functions
  const openDialog = (id: number) => {
    setId(id)
    setOpen(true)
  }

  return (
    <div className='py-20 lg:py-32'>
      <div className='px-8 xl:px-40 2xl:px-40 flex flex-col'>
        <text className='text-3xl lg:text-7xl xl:text-40 text-primary font-700'>
          <Translations text='Comprehensive Solutions' />
        </text>
        <text className='text-3xl lg:text-7xl xl:text-40 text-primary font-700'>
          <Translations text='For Every Need' />
        </text>
      </div>
      <div className='grid lg:grid-cols-2 grid-rows-2 mt-40'>
        <TopHoverableItem
          className='px-20 xl:px-40 2xl:px-40 py-20 flex flex-col gap-20 hover:bg-light group cursor-pointer'
          onClick={() => openDialog(1)}
        >
          <div className='flex justify-between items-center'>
            <RocketIcon className='fill-primary group-hover:fill-white group-hover:-ml-10 ease-in-out duration-300' />
            <IconButton className='hidden lg:block'>
              <ChevronIcon
                style={{ ...(isArabic ? { transform: 'rotateY(180deg)' } : {}) }}
                className='h-30 w-30 fill-primary group-hover:fill-white'
              />
            </IconButton>
          </div>
          <div className='flex flex-col gap-10 w-full lg:w-2/3 group-hover:ml-10 ease-in-out duration-300'>
            <text className='text-primary font-600 text-16 group-hover:text-white'>
              <Translations text='Fast MVP' />
            </text>
            <text className='text-grey-500 font-500 text-14 group-hover:text-white'>
              <Translations text='Build your MVP with ease and get to market faster.' />
            </text>
          </div>
        </TopHoverableItem>
        <TopHoverableItem
          className='px-20 xl:px-40 2xl:px-40 py-20 flex flex-col gap-20 hover:bg-secondary group cursor-pointer'
          onClick={() => openDialog(2)}
        >
          <div className='flex justify-between items-center'>
            <PrecisionIcon className='fill-primary group-hover:fill-white group-hover:-ml-10 ease-in-out duration-300' />
            <IconButton className='hidden lg:block'>
              <ChevronIcon
                style={{ ...(isArabic ? { transform: 'rotateY(180deg)' } : {}) }}
                className='h-30 w-30 fill-primary group-hover:fill-white'
              />
            </IconButton>
          </div>
          <div className='flex flex-col gap-10 w-full lg:w-2/3 group-hover:ml-10 ease-in-out duration-300'>
            <text className='text-primary font-600 text-16 group-hover:text-white'>
              <Translations text='Precision project scope' />
            </text>
            <text className='text-grey-500 font-500 text-14 group-hover:text-white'>
              <Translations text='Define your scope, stay on track and maximize ROI' />
            </text>
          </div>
        </TopHoverableItem>
        <BottomHoverableItem
          className='px-20 xl:px-40 2xl:px-40 py-20 flex flex-col gap-20 hover:bg-primary group cursor-pointer'
          onClick={() => openDialog(3)}
        >
          <div className='flex justify-between items-center'>
            <MultiIcon className='fill-primary group-hover:fill-white group-hover:-ml-10 ease-in-out duration-300' />
            <IconButton className='hidden lg:block'>
              <ChevronIcon
                style={{ ...(isArabic ? { transform: 'rotateY(180deg)' } : {}) }}
                className='h-30 w-30 fill-primary group-hover:fill-white'
              />
            </IconButton>
          </div>
          <div className='flex flex-col gap-10 w-full lg:w-2/3 group-hover:ml-10 ease-in-out duration-300'>
            <text className='text-primary font-600 text-16 group-hover:text-white'>
              <Translations text='Dedicated development teams' />
            </text>
            <text className='text-grey-500 font-500 text-14 group-hover:text-white'>
              <Translations text='Improve and extend your business smartly with skilled developers who understand your needs.' />
            </text>
          </div>
        </BottomHoverableItem>
        <BottomHoverableItem
          className='px-20 xl:px-40 2xl:px-40 py-20 flex flex-col gap-20 hover:bg-grey-200 group cursor-pointer'
          onClick={() => openDialog(4)}
        >
          <div className='flex justify-between items-center'>
            <IdeaIcon className='fill-primary  group-hover:-ml-10 ease-in-out duration-300' />
            <IconButton className='hidden lg:block'>
              <ChevronIcon
                style={{ ...(isArabic ? { transform: 'rotateY(180deg)' } : {}) }}
                className='h-30 w-30 fill-primary '
              />
            </IconButton>
          </div>
          <div className='flex flex-col gap-10 w-full lg:w-2/3 group-hover:ml-10 ease-in-out duration-300'>
            <text className='text-primary font-600 text-16'>
              <Translations text='Consulting' />
            </text>
            <text className='text-grey-500 font-500 text-14 group-hover:text-primary'>
              <Translations text=' Get the right support from a true ally to tackle specific challenges and optimize your process.' />
            </text>
          </div>
        </BottomHoverableItem>
      </div>
      <SecondLevelDialog open={open} setOpen={setOpen} id={id} setId={setId} />
    </div>
  )
}

export default SecondLevel
