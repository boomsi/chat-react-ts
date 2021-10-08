import React from 'react';
import { hot } from 'react-hot-loader/root';

import { IRoutes, routes } from '@/router';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Switch>
        {routes.map((item: IRoutes) => {
          const C = React.lazy(() => import(`./pages/${item.component}`));
          return (
            <Route key={item.key} path={item.path}>
              <C />
            </Route>
          );
        })}
      </Switch>
    );
  }
}

export default hot(App);
