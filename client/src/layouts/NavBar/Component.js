import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { routeList } from '../../pages/routes';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import CurrentUser from '../../components/Auth/CurrentUser'

const NavBar = ({ history }) =>
  <Navbar color="light" light expand="md">
    <Link className="navbar-brand" to={routeList.HOME} >Graph QL app </Link>
  <NavbarToggler/>
  <Collapse isOpen={false} navbar>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <Link to={routeList.SIGN_IN} >
          <NavLink>Sign In</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link to={routeList.SIGN_UP} >
         <CurrentUser />
        </Link>
        <Link to={routeList.SIGN_UP} >
          <NavLink>Sign Up</NavLink>
        </Link>
      </NavItem>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Options
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            Option 1
          </DropdownItem>
          <DropdownItem>
            Option 2
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            Reset
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Nav>
  </Collapse>
</Navbar>;

NavBar.propTypes = {
  history: PropTypes.object.isRequired,
};

NavBar.defaultProps = {
  message: '',
};

export default NavBar;
