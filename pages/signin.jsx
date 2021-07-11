import Head from 'next/head'

import {Container, Col} from "react-bootstrap";

import KleptoNav from "../components/KleptoNav"

const SignIn = props => {
    const headingStyle = {
        fontFamily: 'Abril Fatface'
    }

    return (
        <>
            <Head>
                <title>Kleptonix | Sign In</title>
                <meta name={'description'} content={'Sign in to Kleptonix.'}/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <KleptoNav/>
            <Container fluid>
                <Col className={'d-flex justify-content-center mt-5'}>
                    <h2 style={headingStyle}>Sign In</h2>
                </Col>
            </Container>
        </>
    )
}

export default SignIn