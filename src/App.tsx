// Redux
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

// MUI 
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// Customizações globais do Redux
import CustomStore from './redux/CustomStore';
import rootReducer from './redux/Reducer';

import themes from './themes';
import Layout from './layout/Layout';

function App(): JSX.Element {
  const sagaMiddleware = createSagaMiddleware();
  const store = new CustomStore(rootReducer, sagaMiddleware);

  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={themes()}>
          <CssBaseline />
          <Layout>
            <div>Children 2</div>
          </Layout>
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  );
}

export default App;
