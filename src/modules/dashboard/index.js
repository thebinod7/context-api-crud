import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../layouts/header';
import Footer from '../layouts/footer';
import Users from '../users';
import EditUser from '../users/Edit';
import AddUser from '../users/Add';
import Demo from '../demo';
import CountryPaginate from '../country_paginate';

export default function Index() {
  return (
    <>
      <Header />
      <div className="container" style={{ marginTop: 20 }}>
        <Switch>
          <Route exact path="/" component={Users} />
          <Route exact path="/add_user" component={AddUser} />
          <Route exact path="/demo" component={Demo} />
          <Route exact path="/country" component={CountryPaginate} />
          <Route exact path="/edit/:id" component={EditUser} />
        </Switch>
        <Footer />
      </div>
    </>
  );
}
