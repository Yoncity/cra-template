import React, { Component } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';

class Header extends Component {
  activePage = currentPage => {
    const page = this.props.location.pathname;
    switch (page) {
      case currentPage:
        return 'header-link active';
      default:
        return 'header-link';
    }
  };

  render() {
    const { HOME, ABOUT } = routes;
    return (
      <div id="header">
        <Link to={HOME.link}>
          <div className={this.activePage(HOME.link)}>{HOME.name}</div>
        </Link>

        <Link to={ABOUT.link}>
          <div className={this.activePage(ABOUT.link)}>{ABOUT.name}</div>
        </Link>

        <div className="header-link" id="sign-out" onClick={this.signout}>
          Sign-out
        </div>
      </div>
    );
  }
}

export default Header;
