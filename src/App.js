import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CartContext } from './CartContext';
import EcommerceHomePage from './EcommerceHomePage';
import EachProductPage from './EachProductPage';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <CartContext>
      <Switch>
        <Route exact path="/" component={EcommerceHomePage} />
        <Route path="/product/:id" component={EachProductPage} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </CartContext>
  );
};

export default App;