// ** MUI Imports
import { Theme } from '@mui/material/styles'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

const Pagination = (theme: Theme) => {
  return {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          color: 'black',
          border: 0,
          fontWeight: 500,
          '&.Mui-selected:not(.Mui-disabled):not(.MuiPaginationItem-textPrimary):not(.MuiPaginationItem-textSecondary):hover':
            {
              backgroundColor: `rgba(${theme.palette.customColors.main}, 0.12)`
            }
        },
        previousNext: {
          backgroundColor: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: `${theme.palette.primary.light} !important`
          }
        },
        outlined: {
          backgroundColor: 'transparent',
          borderColor: `rgba(${theme.palette.customColors.main}, 0.22)`
        },
        outlinedPrimary: {
          '&:hover': {
            backgroundColor: `${theme.palette.primary.light} !important`
          },
          '&.Mui-selected': {
            backgroundColor: 'transparent',
            borderColor: 'transparent',

            // backgroundColor: hexToRGBA(theme.palette.primary.main, 0.12),
            '&:hover': {
              backgroundColor: `${hexToRGBA(theme.palette.primary.main, 0.24)} !important`
            }
          }
        },
        outlinedSecondary: {
          '&:hover': {
            backgroundColor: `${theme.palette.primary.light} !important`
          },
          '&.Mui-selected': {
            backgroundColor: 'transparent',

            // backgroundColor: hexToRGBA(theme.palette.secondary.main, 0.12),
            '&:hover': {
              backgroundColor: `${hexToRGBA(theme.palette.secondary.main, 0.24)} !important`
            }
          }
        },
        rounded: {
          borderRadius: 8
        }
      }
    }
  }
}

export default Pagination
