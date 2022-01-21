import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

const Navigation = () => {
  return (
    <Navbar
      id='Navigation'
      collapseOnSelect
      expand='lg'
      bg='dark'
      variant='dark'
    >
      <Container>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='/'>Главная</Nav.Link>

            <NavDropdown title='Категории' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#'>Оружия</NavDropdown.Item>
              <NavDropdown.Item href='#'>Аксессуары</NavDropdown.Item>
              <NavDropdown.Item href='#'>Патроны</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title='О магазине' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#'>О нас</NavDropdown.Item>
              <NavDropdown.Item href='#'>Контакты</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#pricing'>TODO</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
