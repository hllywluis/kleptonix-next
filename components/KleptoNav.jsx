import {useRouter} from 'next/router'

import {Container, Navbar, Nav, Col} from "react-bootstrap";

const KleptoNav = props => {
    const router = useRouter()

    const logoStyle = {
        fontFamily: 'Bungee'
    }

    const linkStyle = {
        fontFamily: 'Abril Fatface'
    }

    return (
        <Navbar sticky={'top'}>
            <Container className={'d-flex'} fluid>
                <Col className={'d-flex justify-content-start'}>
                    <Nav className={'ms-5'}>
                        <Nav.Link active={router.pathname === '/feed'} style={linkStyle} href={'/feed'}>Feed</Nav.Link>
                    </Nav>
                </Col>
                <Col className={'d-flex justify-content-center'}>
                    <Navbar.Brand href={'/'} style={logoStyle}>Kleptonix</Navbar.Brand>
                </Col>
                <Col className={'d-flex justify-content-end'}>
                    <Nav className={'ms-auto me-5'}>
                        <Nav.Link active={router.pathname === '/signin'} style={linkStyle} href={'/signin'}>Sign In</Nav.Link>
                    </Nav>
                </Col>
            </Container>
        </Navbar>
    )
}

export default KleptoNav