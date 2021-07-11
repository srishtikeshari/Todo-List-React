import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Navbar from 'react-bootstrap/Navbar'
import PropTypes from 'prop-types'

export const Header = (props) => {
        return (
     
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
              </Nav>
              {props.searchBar ? <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form> : ""}
            </Navbar.Collapse>
          </Navbar>
    )
}

Header.defaultProps = {
    title : "Insert Title",
    searchBar : false
}

Header.propTypes = {
    title : PropTypes.string,
    searchBar : PropTypes.bool
}
