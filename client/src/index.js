import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { I18nextProvider } from 'react-i18next';
import { client } from '@store';
import { theme } from '@themes';
import Views from './views';
import i18n from './i18n';
// top level test of react suspense
import { Spinner } from '@components';

// CSS reset (gray background: #f5f5f6)
const GlobalStyle = createGlobalStyle`
  body { margin: 0; background: white; font-family: sans-serif; }
  * { box-sizing: border-box; }
  a { color: inherit; text-decoration: none; } 
  .plotly-notifier { visibility: hidden; }
`;

const Index = () => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <ApolloProvider client={client}>
        <I18nextProvider i18n={i18n}>
          <ThemeProvider theme={theme}>
            <Views />
          </ThemeProvider>
        </I18nextProvider>
      </ApolloProvider>
    </React.Suspense>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
