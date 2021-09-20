import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Login from './Login';
import { doLogin } from '../../redux/actions/user';

const LoginContainer = ({ isFetching, loggedIn, error, doLogin, history }) => {
  useEffect(() => {
    if (loggedIn) {
      history.push('/list');
    }
  }, [loggedIn, history]);
  return <Login isFetching={isFetching} error={error} doLogin={doLogin} />;
};

const mapStateToProps = ({ user }) => ({
  isFetching: user.isFetching,
  loggedIn: user.loggedIn,
  error: user.error,
});

const mapDispatchToProps = {
  doLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
