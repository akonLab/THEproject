import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));

// products page  
const Product = lazy(() => import('./products/Product'));
const AddProduct = lazy(() => import('./products/AddProduct'));
const AllProducts = lazy(() => import('./products/AllProducts'));
const AllCategory = lazy(() => import('./products/AllCategory'));
const AddCategory = lazy(() => import('./products/AddCategory'));
const Category = lazy(() => import('./products/Category'));

// order
const Order = lazy(() => import('./order/Order'));

// rigths
const Rigth = lazy(() => import('./rigths/Rigth'));
const EditRight = lazy(() => import('./rigths/EditRight'));

// error 
const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

//login
const Login = lazy(() => import('./login/Login'));
const Register1 = lazy(() => import('./login/Register'));
// const Lockscreen = lazy(() => import('./login/Lockscreen'));


class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />

          {/* product  */}   
          <Route path="/product" component={Product} />
          <Route path="/add-product" component={AddProduct} />
          <Route path="/all-product" component={AllProducts} />
          {/* cattegory */}
          <Route path="/all-category" component={AllCategory} />
          <Route path="/add-category" component={AddCategory} />
          <Route path="/category" component={Category} />
       

          {/* order  */}
          <Route path="/order" component={Order} />

          {/* right */}
          <Route path="/rigth" component={Rigth} />
          <Route path="/editrigth" component={EditRight} />

          {/* login  */}
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register1} />
          {/* <Route path="/user-pages/lockscreen" component={Lockscreen} /> */}

          {/* error */}
          <Route path="/error-pages/error-404" component={Error404} />
          <Route path="/error-pages/error-500" component={Error500} />


          <Redirect to="/login" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;