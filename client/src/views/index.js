import React from 'react';
import { Router } from '@reach/router';
import Roles from './Roles';
import NotFound from './NotFound';

import Start from './Start';

const AppRouter = () => {
  return (
    <Router>
      <Start path="/" />
      <Roles path="/role/:id" />
      <NotFound default />
    </Router>
  );
};

AppRouter.displayName = 'AppRouter';

export default AppRouter;
