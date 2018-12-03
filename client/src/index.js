import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { client } from '@store';
import { theme } from '@themes';
import Views from './views';
// top level test of react suspense
import { Spinner } from '@components';

const GlobalStyle = createGlobalStyle`
  body { margin: 0; background: white; font-family: sans-serif; }
  * { box-sizing: border-box; }
  a { color: inherit; text-decoration: none; }
`;

const Index = () => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Views />
        </ThemeProvider>
      </ApolloProvider>
    </React.Suspense>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
