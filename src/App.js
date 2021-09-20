import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import { Provider } from 'react-redux';
import './App.css';

import Header from './components/Header';
import LoginContainer from './pages/Login';
import configureStore from './redux/configStore';
import AuthRoute from './components/AuthRoute';
import BookListContainer from './pages/List';
import BookEditContainer from './pages/Edit';

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Header />
          <Switch>
            <AuthRoute path="/list" component={BookListContainer} />
            <AuthRoute path="/edit" component={BookEditContainer} />
            <Route path="/" component={LoginContainer} />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
