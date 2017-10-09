import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import PhotosMain from './components/PhotosMain';
import OnePhoto from './components/OnePhoto';
import NewPhoto from './components/NewPhoto';
import EditPhoto from './components/EditPhoto';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllPhotos } from './actions/photos';

class App extends Component {

  componentDidMount() {
    this.props.getAllPhotos();
  }

  render() {
    return (
      <div className="App">
        <div className="photo-container">
          <PhotosMain />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPhotos: bindActionCreators(getAllPhotos, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);
