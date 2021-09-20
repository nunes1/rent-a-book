import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const AuthRoute = ({ loggedIn, ...rest }) => {

  return (
    loggedIn ? <Route {...rest} /> : <Redirect to="/"/>
  );
};

const mapStateToProps = ({ user }) => ({
  loggedIn: user.loggedIn,
});

export default connect(mapStateToProps)(AuthRoute);
