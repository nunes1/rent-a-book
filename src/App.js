import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import './App.css';

import Header from './components/Header';
import LoginContainer from './pages/Login';

function App() {
  return (
    <Router>
      <Layout>
        <Header />
        <Switch>
          <Route path="/list">{/* <About /> */}</Route>
          <Route path="/edit">{/* <Users /> */}</Route>
          <Route path="/"><LoginContainer /></Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
