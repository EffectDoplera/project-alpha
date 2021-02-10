import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Dialogs from '../components/Dialogs/Dialogs';
import Music from '../components/Music/Music';
import News from '../components/News/News';
import Profile from '../components/Profile/Profile';
import Settings from '../components/Settings/Settings';
import Users from '../components/Users/Users';
import Auth from '../pages/Auth';

type RoutesProps = {
  isAuth: boolean
}

const Routes: React.FC<RoutesProps> = ({isAuth}) => {
  let routes = (
    <Switch>
      <Route path={ '/auth' } component={ Auth } />
      <Redirect to={'/auth'} />
    </Switch>
  )

  if (isAuth) {
    routes = (
      <Switch>
        <Route path={ '/auth' } component={ Auth } />
        <Route path={ '/profile/:uid?' } component={ Profile } />
        <Route path={ '/dialogs' } component={ Dialogs } />
        <Route path={ '/users' } component={ Users } />
        <Route path={ '/news' } component={ News } />
        <Route path={ '/music' } component={ Music } />
        <Route path={ '/settings' } component={ Settings } />
        <Redirect to={'/profile'} />
      </Switch>
    )
  }

  return routes
};

export default Routes;
