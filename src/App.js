import './App.css';
import SignIn from './pages/SignIn';
import {Route, Redirect, Switch} from 'react-router-dom';
import {Fragment} from 'react';
import PRoute from './components/PRoute';
import Notes from './pages/Notes';
import UserDetails from './pages/UserDetails';
import SPRoute from './components/SPRout';
import AddNotes from './pages/AddNotes';
import EditNote from './pages/EditNote';
import NPRoute from './components/NPRoute';

function App() {

  return (
    <Fragment>
      <Switch>
        <Route path="/" exact>
            {/* <PRoute pageName={<UserDetails />} /> */}
            <NPRoute />
        </Route>
        <Route path="/sign-in" >
          <SPRoute pageName={<SignIn />} />
        </Route>
        <Route path="/user-details" >
          <PRoute pageName={<UserDetails />} />
        </Route>
        <Route path="/notes" >
          <PRoute pageName={<Notes />} />
        </Route>
        <Route path="/add-notes" >
          <PRoute pageName={<AddNotes />} />
        </Route>
        <Route path="/edit-note/:noteKey" >
          <PRoute pageName={<EditNote />} />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Fragment>
  )
}

export default App