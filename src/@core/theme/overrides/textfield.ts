const TextField = () => {
  return {
    MuiTextField: {
      variants: [
        {
          props: { className: 'custom-input' },
          style: {
            '& .MuiFilledInput-root': {
              color: '#000',
              fontWeight: 500,
              border: '2px solid transparent',
              backgroundColor: '#F8F7F7',
              borderRadius: '5px',
              paddingLeft: '0px'
            },
            '& .MuiFilledInput-root:hover': {
              border: `2px solid #131D47`,
              backgroundColor: '#F8F7F7'
            },
            '& .MuiOutlinedInput-root': {
              border: '2px solid transparent',
              backgroundColor: '#F8F7F7',
              borderRadius: '5px',
              paddingLeft: '0px'
            },
            '& .MuiOutlinedInput-root:hover': {
              border: `2px solid #131D47`,
              backgroundColor: '#F8F7F7'
            },
            '& .Mui-focused': {
              border: `2px solid #131D47`,
              backgroundColor: '#F8F7F7'
            }
          }
        }
      ],
      styleOverrides: {
        root: {
          'MuiTextField-root': {
            'label:first-of-type': {
              color: '#F8F7F7'
            }
          },

          //filled
          '& .MuiFilledInput-root': {
            border: '2px solid transparent',
            backgroundColor: 'white',
            borderRadius: '5px',
            paddingLeft: '0px'
          },
          '& .MuiFilledInput-root:before': {
            display: 'none'
          },
          '& .MuiFilledInput-root:after': {
            border: 'none'
          },
          '& .MuiFilledInput-root:hover': {
            border: `2px solid #F8F7F7`
          },
          '& .Mui-focused': {
            border: `2px solid #F8F7F7`
          },
          '& label': {
            fontSize: 20,
            border: 'none !important',
            backgroundColor: 'transparent !important'
          },
          '& label.Mui-focused': {
            color: '#131D47'
          },
          '& p': {
            border: 'none !important',
            backgroundColor: 'transparent !important'
          },
          '& .MuiInputBase-multiline': {
            paddingTop: '21px',
            paddingRight: '12px',
            paddingBottom: '4px',
            paddingLeft: '12px !important'
          },

          //outlined
          '& .MuiOutlinedInput-root': {
            border: '1px solid #D0D0D0',
            backgroundColor: 'white',
            borderRadius: '8px',
            paddingLeft: '0px'
          },
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none'
          }
        }
      }
    }
  }
}

export default TextField
