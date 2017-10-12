import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


import PhotosMain from './components/PhotosMain';
import OnePhoto from './components/OnePhoto';
import NewPhoto from './components/NewPhoto';
import EditPhoto from './components/EditPhoto';
import Home from './components/Home';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllPhotos } from './actions/photos';

class App extends Component {

  componentDidMount() {
    this.props.getAllPhotos();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar className="navbar" color="dark" dark expand="md">
            <NavbarBrand href="/">photon</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/photos">Photos</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/photos/new">Add</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/photos" component={PhotosMain} />
            <Route exact path="/photos/new" component={NewPhoto} />
            <Route exact path="/photos/:id" component={OnePhoto} />
            <Route exact path="/photos/:id/edit" component={EditPhoto} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPhotos: bindActionCreators(getAllPhotos, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);
