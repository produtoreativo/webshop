import { createTheme } from '@mui/material/styles';
import { colors } from '@mui/material';

export const theme = () => {
  // const red = colors['red'];
  const color = colors['yellow'];
  const themes = createTheme({
    palette: {
      // mode: 'dark',
      primary: {
        main: color[500],
      },
      secondary: {
        main: color[100],
      },
      error: {
        main: color.A400,
      },
    },
  });

  return themes;
};

export default theme;
