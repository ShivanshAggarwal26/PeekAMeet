import './App.css';
import SignIn from './pages/SignIn';
import {Route} from 'react-router-dom';
import {Fragment} from 'react';
import PRoute from './components/PRoute'

function App() {

  return (
    <Fragment>
      <Route path="/" exact>
          <SignIn />
          {/* <PRoute /> */}
      </Route>
      <Route path="/user-details">
        <PRoute />
      </Route>
    </Fragment>
  )
}

export default App