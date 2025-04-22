// ** MUI Imports
import { Theme } from "@mui/material/styles";

const DatePicker = (theme: Theme) => {
  return {
    MuiPickersDay: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.main,
          borderRadius: "3px",
          borderWidth: "1px",
          borderColor: theme.palette.primary.dark,
          border: "1px solid",
          backgroundColor: theme.palette.primary.light,
        },
      },
    },
  };
};

export default DatePicker;
