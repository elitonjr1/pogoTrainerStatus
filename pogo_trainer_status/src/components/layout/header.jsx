import React, { useState } from 'react';
import {
  Container,
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
  DropdownItem,
  NavbarText  
} from 'reactstrap';
import styled from "styled-components";

const Header = () => {
    return (
        <HeaderContainer>
            <Container>
      <Navbar>
        <NavbarBrand href="/">POGONIT</NavbarBrand>        
          <Nav>
            <NavItem>
                <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Status</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Ranking</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Perfil</NavbarText>        
      </Navbar>
            </Container>
        </HeaderContainer>
    )
};

export default Header;

const HeaderContainer = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    background-color: #DAC8B3;    
`;
const Logo = styled.div`
    color: #f54242;
    font-weight: 600;
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
        color: #f57e42;
    }
`;