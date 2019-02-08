import React from 'react';
import {Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import profilePic from '../../static/dat.jpg';
import './Navigation.scss';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar className='navigation__navbar' dark expand='md' fixed='top'>
        <Container>
          <NavbarBrand href='/'>
            <img src={profilePic} className='profile-pic' alt='Dat Tran'/>
            <span>Dat Tran</span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href='/projects/'>Code</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/posts/'>Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/talks/'>Talks</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/about/'>About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;
