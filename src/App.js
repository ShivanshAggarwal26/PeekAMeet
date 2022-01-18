import './App.css';
import SignIn from './pages/SignIn';
import SignInState from './context/SignInState';
import {Route, useHistory} from 'react-router-dom';
import {Fragment} from 'react';
import UserDetails from './pages/UserDetails';

function App() {
  const history = useHistory();

  return (
    <Fragment>
      <Route path="/" exact>
        <SignInState>
          <SignIn history={history}/>
        </SignInState>
      </Route>
      <Route path="/user-details">
        <UserDetails />
      </Route>
    </Fragment>
  )
}

export default App