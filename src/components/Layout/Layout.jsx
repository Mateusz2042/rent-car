import React, { Component } from 'react';
import Navbar from '../NavBar';
import './_layout.scss';

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Navbar />
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
