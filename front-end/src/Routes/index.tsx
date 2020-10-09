import React from 'react';
import { Route, Switch } from 'react-router-dom';
import dashboard from '../Dashboard';
import repository from '../Repository';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={dashboard} />
        <Route path="/rep" component={repository} />
    </Switch>
);

export default Routes;
