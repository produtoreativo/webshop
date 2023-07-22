import { createTheme } from '@mui/material/styles';
import { colors } from '@mui/material';

export const theme = () => {
  const red = colors['red'];
  const themes = createTheme({
    palette: {
      primary: {
        main: red[500],
      },
      secondary: {
        main: red[100],
      },
      error: {
        main: red.A400,
      },
    },
  });

  return themes;
};

export default theme;
