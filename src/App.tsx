import React from 'react';
import { Provider } from 'react-redux';
import CustomStore from './store';
import Layout from './layout/Layout';
import RouteProvider, {router} from './navigation';

function App(): React.JSX.Element {
  const store = new CustomStore(router);

  return (
    <Provider store={store}>
      <Layout>
        <RouteProvider />
      </Layout>
    </Provider>
  );
}

export default App;
