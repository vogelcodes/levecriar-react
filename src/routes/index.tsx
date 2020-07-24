import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Signup from '../pages/Signup';
import Thanks from '../pages/Thanks';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Signup} />
    <Route path="/thanks" component={Thanks} />
  </Switch>
);

export default Routes;
