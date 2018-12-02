import React from 'react';
import { Router } from '@reach/router';
import Pages from './Pages';
import Roles from './Roles';
import NotFound from './NotFound';

const AppRouter = () => {
  return (
    <Router>
      <Pages path="/" />
      <Pages path="/:id" />
      <Roles path="/role/:id" />
      <NotFound default />
    </Router>
  );
};

AppRouter.displayName = 'AppRouter';

export default AppRouter;
