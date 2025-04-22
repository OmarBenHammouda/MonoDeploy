// ** React Import
import { Fragment } from 'react'
import FifthLevel from 'src/views/components/landing/FifthLevel'

// ** Custom Components
import FirstLevel from 'src/views/components/landing/FirstLevel'
import FourthLevel from 'src/views/components/landing/FourthLevel'
import SecondLevel from 'src/views/components/landing/SecondLevel'
import SeventhLevel from 'src/views/components/landing/SeventhLevel'
import SixthLevel from 'src/views/components/landing/SixthLevel'
import ThirdLevel from 'src/views/components/landing/ThirdLevel'

const Landing = () => {
  return (
    <Fragment>
      <FirstLevel />
      <SecondLevel />
      <ThirdLevel />
      <FourthLevel />
      <FifthLevel />
      <SixthLevel />
      <SeventhLevel />
    </Fragment>
  )
}

export default Landing
