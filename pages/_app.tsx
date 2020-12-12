import { ApolloProvider } from '@apollo/client';
import { useApollo } from "../lib/client";
import store from '../store/store';
import { Provider } from 'react-redux';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <Provider store={store} >
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  );
}

export default MyApp;
