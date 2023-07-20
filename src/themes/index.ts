import { createTheme } from '@mui/material/styles';
import { colors } from '@mui/material';

export const theme = () => {
  const red = colors['red'];
  const themes = createTheme({
    palette: {
      primary: {
        main: '#556cd6',
      },
      secondary: {
        main: '#19857b',
      },
      error: {
        main: red.A400,
      },
    },
  });

  return themes;
};

export default theme;
