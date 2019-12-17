import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header/Header";
import "./Layout.scss";

const Layout = ({ children, location }) => {
  return (
    <React.Fragment>
      <Header location={location} />
      <div className="main-content">{children}</div>
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object
};

Layout.defaultProps = {
  children: null,
  location: {}
};

export default Layout;
