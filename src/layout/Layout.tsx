import { ThemeProvider } from '@mui/material/styles';
import { Box, CssBaseline, StyledEngineProvider, PaletteMode } from '@mui/material';
import { useSelector } from 'react-redux';
import { PropsWithChildren } from 'react';
import themes from '../themes';
import { darkModeSelector } from '../redux/actions';

function Layout(props: PropsWithChildren) {
  const darkMode: PaletteMode =
     useSelector(darkModeSelector) || 'dark' as PaletteMode;
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(darkMode)}>
          <CssBaseline />
          {props.children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default Layout;