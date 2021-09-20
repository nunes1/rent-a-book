import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import { Provider } from 'react-redux';
import './App.css';

import Header from './components/Header';
import LoginContainer from './pages/Login';
import configureStore from './redux/configStore';

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Header />
          <Switch>
            <Route path="/list">{/* <About /> */}</Route>
            <Route path="/edit">{/* <Users /> */}</Route>
            <Route path="/" component={LoginContainer} />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
