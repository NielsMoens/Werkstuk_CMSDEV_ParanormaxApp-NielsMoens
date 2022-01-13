import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import Link from "next/link";

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Paranormax</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link href="/" ><Nav.Link href="/Onboarding/LoginPage" >Home</Nav.Link></Link>
                            <Link href="/Onboarding/LoginPage" ><Nav.Link href="/Onboarding/LoginPage" >login</Nav.Link></Link>
                            <Link href="/" ><Nav.Link href="/Onboarding/LoginPage" >contact</Nav.Link></Link>
                            <NavDropdown title="Profile Info" id="collasible-nav-dropdown">
                                <Link href="/Onboarding/Profile"><NavDropdown.Item href="/Onboarding/Profile">View Profile</NavDropdown.Item></Link>
                                <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
