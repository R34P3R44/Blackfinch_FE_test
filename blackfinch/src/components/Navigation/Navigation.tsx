import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { fetchCategories } from '../../fetchData'
import './Navigation.css';
import { FaCartShopping } from "react-icons/fa6";
import { useRecoilState, useRecoilValue } from 'recoil'; 
import { globalState } from '../../Store/atom';


const Navigation: React.FC = () => {
    const [categories, setCategories] = useState<string[]>([]);
    const globalQty = useRecoilValue(globalState);

    useEffect(() => {
        setDataForNavbar();
    }, []);

    const setDataForNavbar = async () => {
        const data = await fetchCategories();
            setCategories(Object.keys(data))
      }    

    return (
        <Navbar expand="lg" data-bs-theme="dark" className='w-100 navbarFixedPosition'>
            <Container className='w-100 '>
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbarStyle">
                        {categories.map((category) => (
                            <Nav.Link className='navlinkStyle mx-4' href={`#${category}`}>
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </Nav.Link>
                        ))}
                        <Nav.Link className='cartnavlinkPosition' href={`#basket`}>
                                <button className='cartButtonStyle'><FaCartShopping size={30} className='shoppingcart'/><span className="badge badge-light">{`${globalQty}`}</span></button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
