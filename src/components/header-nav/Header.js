import React from 'react';
import './Header.scss';
import logo from './../../assets/logo.png';
import { Link } from 'react-router-dom';
import { 
    Nav, NavLeft, NavItem, NavCenter, NavToggle, Breadcrumb,
    Icon, Button, Control, Field, NavRight, Image, BreadcrumbItem
  } from 'bloomer';

const header = () => {


    return (

        <Nav className='khula header'>
            <NavLeft>
                <Link to="/">
                    <Image isSize='64x64' className='khula brand item' src={logo} />
                </Link>
            </NavLeft>
            <NavCenter className='user-path'>
                <Breadcrumb isAlign='center' isSize='small' hasSeparator='bullet'>
                    <ul>
                        <BreadcrumbItem><a href='/'>products</a></BreadcrumbItem>
                        {/* <BreadcrumbItem><a>Components</a></BreadcrumbItem>
                        <BreadcrumbItem isActive><a>Breadcrumb</a></BreadcrumbItem> */}
                    </ul>
                </Breadcrumb>
            </NavCenter>
            <NavToggle />
            <NavRight isMenu>
                <NavItem><Link to="/">Home</Link></NavItem>
                <NavItem className='item'>
                    <Icon className='fa fa-unlock-alt khula font-icon' aria-hidden='true' />
                    <span>Sign Out</span>
                </NavItem>
                <NavItem>
                    <Field isGrouped>
                        <Control>
                            <Button id='twitter'>
                                <Icon className='fa fa-cart-arrow-down' />
                                <span>Checkout</span>
                            </Button>
                        </Control>
                    </Field>
                </NavItem>
            </NavRight>
        </Nav>
    )
};

export default header;
