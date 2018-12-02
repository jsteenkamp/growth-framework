import React from 'react';
import { Router } from '@reach/router';
import Workspace from './workspace/Workspace';
import NotFound from './NotFound';

const AppRouter = () => {
  return (
    <Router>
      <Workspace path="/*" />
      <NotFound default />
    </Router>
  );
};

AppRouter.displayName = 'AppRouter';

export default AppRouter;
