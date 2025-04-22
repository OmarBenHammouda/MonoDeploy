// ** MUI Imports
import { styled } from '@mui/material/styles'
import { TextField, Select, FormControl, InputLabel, MenuItem, Button } from '@mui/material'

// ** Translations
import Translations from 'src/layouts/components/Translations'

// ** Styled Textfield
const TxtField = styled(TextField)(({ theme }) => ({
  '& .MuiFormLabel-root': {
    color: theme.palette.primary.main,
    fontSize: '20px',
    mt: -3
  }
}))

const SeventhLevel = () => {
  return (
    <div className='flex flex-col lg:flex-row py-32'>
      <div className='w-full lg:w-1/2 flex flex-col items-start px-8 xl:px-40 2xl:px-40 my-10'>
        <text className='text-4xl lg:text-5xl xl:text-7xl text-primary font-700'>
          <Translations text='Ready To' />
        </text>
        <text className='text-4xl lg:text-5xl xl:text-7xl text-primary font-700'>
          <Translations text='Accelerate' />
        </text>
        <text className='text-4xl lg:text-5xl xl:text-7xl text-primary font-700'>
          <Translations text='Your Growth?' />
        </text>
      </div>
      <div className='w-full lg:w-1/2 flex flex-col gap-20 px-8 xl:px-40 2xl:px-40 my-10'>
        <TxtField
          fullWidth
          size='medium'
          label={<Translations text='Project Description' />}
          variant='standard'
          placeholder='My project XYZ...'
          InputLabelProps={{
            sx: {
              fontSize: '32px',
              fontWeight: 600,
              '&.MuiOutlinedInput-notchedOutline': { fontSize: '32px' }
            }
          }}
        />
        <FormControl variant='standard' fullWidth>
          <InputLabel
            id='demo-simple-select-standard-label'
            sx={{ color: theme => theme.palette.primary.main, fontSize: '20px', fontWeight: 600 }}
          >
            {<Translations text='Budget Size' />}
          </InputLabel>
          <Select labelId='demo-simple-select-standard-label' id='demo-simple-select-standard' label='Budget Size*'>
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
          </Select>
        </FormControl>
        <TxtField
          fullWidth
          size='medium'
          label={<Translations text='Name' />}
          variant='standard'
          placeholder='John Doe'
          InputLabelProps={{
            sx: {
              fontSize: '32px',
              fontWeight: 600,
              '&.MuiOutlinedInput-notchedOutline': { fontSize: '32px' }
            }
          }}
        />
        <TxtField
          fullWidth
          size='medium'
          label={<Translations text='Email' />}
          variant='standard'
          placeholder='johndoe@gmail.com'
          InputLabelProps={{
            sx: {
              fontSize: '32px',
              fontWeight: 600,
              '&.MuiOutlinedInput-notchedOutline': { fontSize: '32px' }
            }
          }}
        />
        <TxtField
          fullWidth
          size='medium'
          label={<Translations text='How did you hear about us ?' />}
          variant='standard'
          placeholder='Linkedin, Twitter, Facebook...'
          InputLabelProps={{
            sx: {
              fontSize: '32px',
              fontWeight: 600,
              '&.MuiOutlinedInput-notchedOutline': { fontSize: '32px' }
            }
          }}
        />
        <Button
          variant='contained'
          color='secondary'
          className='rounded-0 w-full lg:w-fit h-32 font-600 capitalize mt-10'
        >
          {<Translations text='Send' />}
        </Button>
      </div>
    </div>
  )
}

export default SeventhLevel
