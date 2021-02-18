import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import routes from './routes';
import NavigationBar from './Components/NavBar/NavBar';
import PrivateRoute from './Common/PrivateRoute';
import PublicRoute from './Common/PublicRoute';
import authOperations from './Redux/auth/authOperations';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <>
        <NavigationBar></NavigationBar>
        <Suspense fallback={<h4>Loading...</h4>}>
          <Switch>
            {routes.map(route =>
              route.private ? (
                <PrivateRoute key={route.label} {...route} />
              ) : (
                <PublicRoute
                  key={route.label}
                  {...route}
                  restricted={route.restricted}
                />
              ),
            )}
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  getCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
