import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { Trans } from 'react-i18next';

class Sidebar extends Component {

  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true});
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });

    const dropdownPaths = [
      {path:'/apps', state: 'appsMenuOpen'},
      {path:'/basic-ui', state: 'basicUiMenuOpen'},
      {path:'/advanced-ui', state: 'advancedUiMenuOpen'},   
      {path:'/user-pages', state: 'userPagesMenuOpen'},
      {path:'/error-pages', state: 'errorPagesMenuOpen'},
      {path:'/general-pages', state: 'generalPagesMenuOpen'},
      {path:'/ecommerce', state: 'ecommercePagesMenuOpen'},
    ];

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({[obj.state] : true})
      }
    }));
 
  }

  render () {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item nav-profile">
            <a href="!#" className="nav-link" onClick={evt =>evt.preventDefault()}>
              <div className="nav-profile-image">
                <img src={ require("../../assets/images/faces/face1.jpg") } alt="profile" />
                <span className="login-status online"></span> {/* change to offline or busy as needed */}
              </div>
              <div className="nav-profile-text">
                <span className="font-weight-bold mb-2"><Trans>Current Username</Trans></span>
                <span className="text-secondary text-small"><Trans>Project Manager (role)</Trans></span>
              </div>
            </a>
          </li>

          <li className={ this.isPathActive('/dashboard') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/dashboard">
              <span className="menu-title"><Trans>Dashboard</Trans></span>
              <i className="mdi mdi-home menu-icon"></i>
            </Link>
          </li>

          {/* products */}
          <li className={ this.isPathActive('/product') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.productPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('productPagesMenuOpen') } data-toggle="collapse">
              <span className="menu-title"><Trans>Product</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-apps menu-icon"></i>
            </div>
            <Collapse in={ this.state.productPagesMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/all-product') ? 'nav-link active' : 'nav-link' } to="/all-product"><Trans>All Products</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/all-category') ? 'nav-link active' : 'nav-link' } to="/all-category"><Trans>Categories</Trans></Link></li>
                {/* <li className="nav-item"> <Link className={ this.isPathActive('/product') ? 'nav-link active' : 'nav-link' } to="/product"><Trans>Product</Trans></Link></li> */}
              </ul>
            </Collapse>
          </li>

          {/* orders  */}
          <li className={ this.isPathActive('/order') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/order">
              <span className="menu-title"><Trans>Order</Trans></span>
              <i className="mdi mdi-archive menu-icon"></i>
            </Link>
          </li>
         
         {/* rigths  */}
         <li className={ this.isPathActive('/rigth') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/rigth">
              <span className="menu-title"><Trans>Manage rigths</Trans></span>
              <i className="mdi mdi-account-key menu-icon"></i>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(Sidebar);