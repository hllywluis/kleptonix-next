import Head from 'next/head'

import {Container, Col} from 'react-bootstrap'

import KleptoNav from '../components/KleptoNav'


const Feed = props => {
    const headingStyle = {
        fontFamily: 'Abril Fatface'
    }

    return (
        <>
            <Head>
                <title>Kleptonix | Feed</title>
                <meta name={'description'} content={'Where communities shine together.'}/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <KleptoNav/>
            <Container fluid>
                <Col className={'d-flex justify-content-center mt-5'}>
                    <h2 style={headingStyle}>This page is called &quot;The Feed&quot; for some reason. Hm.</h2>
                </Col>
            </Container>
        </>
    )
}

export default Feed