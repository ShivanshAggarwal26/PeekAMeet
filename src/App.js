import './App.css';
import SignIn from './pages/SignIn';
import {Route, Redirect} from 'react-router-dom';
import {Fragment} from 'react';
import PRoute from './components/PRoute';
import Notes from './pages/Notes';
import {useSelector} from 'react-redux';
import UserDetails from './pages/UserDetails';
import SPRoute from './components/SPRout';
import AddNotes from './pages/AddNotes';
import EditNote from './pages/EditNote';

function App() {

  const mainState = useSelector((state) => {
    return state.mainState;
  })
  const isLogin = mainState.isLogin;

  return (
    <Fragment>
      <Route path="/" exact>
          {/* {!isLogin && <SignIn />} */}
          {/* {isLogin && <Redirect to="/user-details" />} */}
          {/* {isLogin && <UserDetails />} */}
          {/* <SPRoute /> */}
          <PRoute pageName={<UserDetails />} />
          {/* <PRoute /> */}
      </Route>
      <Route path="/sign-in">
        {/* <Redirect to="/" /> */}
        <SPRoute pageName={<SignIn />} />
      </Route>
      <Route path="/user-details">
        <PRoute pageName={<UserDetails />} />
      </Route>
      <Route path="/notes">
        {/* <Notes /> */}
        <PRoute pageName={<Notes />} />
      </Route>
      <Route path="/add-notes">
        <PRoute pageName={<AddNotes />} />
      </Route>
      <Route path="/edit-note/:noteKey">
        <PRoute pageName={<EditNote />} />
      </Route>
    </Fragment>
  )
}

export default App