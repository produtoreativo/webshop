// Redux
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

// MUI 
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// Customizações globais do Redux
import CustomStore, { browserHistory } from './redux/CustomStore';

import themes from './themes';
import Layout from './layout/Layout';

function App(): JSX.Element {
  const store = new CustomStore();
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={themes()}>
          <CssBaseline />
          <Layout>
            <ConnectedRouter history={browserHistory}>
            <div>Children 2</div>
            </ConnectedRouter>
          </Layout>
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  );
}

export default App;
