import React from 'react'
import {Navbar, NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap'

export class NavbarInstance extends React.Component {
  render(){
    return(
      <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#" onClick = {this.props.showResults}>Search Results</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#" onClick = {this.props.showRecent} >Recent Searches</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
    )
  }
}

