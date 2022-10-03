import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/layout';
import Home from '../pages/home';
import Login from '../pages/login';
import PasswordRecovery from '../pages/passwordRecovery';
import SendEmail from '../pages/sendEmail';
import NewPassword from '../pages/newPassword';
import MyAccount from '../pages/myAccount';
import CreateAccount from '../pages/createAccount';
import Checkout from '../pages/checkout';
import Orders from '../pages/orders';
import NotFound from '../pages/notFound';
import AppContext from '../context/appContext';
import useInitialState from '../hooks/useInitialState';
import '../styles/global.css';

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/password-recovery"
              component={PasswordRecovery}
            />
            <Route exact path="/send-email" component={SendEmail} />
            <Route exact path="/new-password" component={NewPassword} />
            <Route exact path="/account" component={MyAccount} />
            <Route exact path="/signup" component={CreateAccount} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/orders" component={Orders} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
