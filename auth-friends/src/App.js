import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Login from './components/Login';
import FriendList from './components/FriendList';
import PrivateRoute from './components/PrivateRoute';
import AddFriendForm from './components/AddFriendForm';

function App() {
  const logout =() => {
    localStorage.removeItem('token');
  }
  
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/friends">Friends Page</Link>
        </li>
        <li>
          <Link to="/login" onClick={logout}>Logout</Link>
        </li>
      </ul>

      <Switch>
        <PrivateRoute exact path='/friends' component={FriendList} />
        <PrivateRoute path='/friends/add' component={AddFriendForm} />
        <Route path='/login' component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
