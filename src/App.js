import Home from './components/Home';
import React from 'react';
import Navbar from './components/Navbar';
import UserProfile from './components/UserProfile';
import PetsProfile from './components/PetsProfile';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from 'semantic-ui-react';

const App = () => (
  <>
  <Navbar />
  <Container>
    <Switch>
      <Route
      exact
      path="/"
      component={Home}
      />
      <Route
      exact
      path="/user/profile"
      render={ () => <div> <UserProfile /> </div> }
      />
      <Route
      exact
      path="/user/pets"
      render={ () => <div> <PetsProfile /> </div>}
      />
    </Switch>
  </Container>
  </>
);


export default App;
