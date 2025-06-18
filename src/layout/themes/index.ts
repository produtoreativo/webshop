import { createTheme } from '@mui/material/styles';
import { Color, PaletteMode, colors } from '@mui/material';

export const theme = (
  darkTheme: PaletteMode,
) => {
  const color: Color = colors.yellow;

  const themes = createTheme({
    palette: {
      mode: darkTheme,
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
