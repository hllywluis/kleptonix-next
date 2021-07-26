import Head from 'next/head'
import {useUser} from '../lib/hooks'

import {Button, Container, Col, Form} from "react-bootstrap";

const SignIn = () => {
    useUser({redirectTo: '/', redirectIfFound: true})

    const logoStyle = {
        fontFamily: 'Bungee'
    }

    const headingStyle = {
        fontFamily: 'Roboto Slab'
    }

    return (
        <>
            <Head>
                <title>Kleptonix | Sign In</title>
                <meta name={'description'} content={'Sign in to Kleptonix.'}/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Container>
                <Col className={'d-flex justify-content-center mt-5'}>
                    <h2 style={headingStyle}>Sign In</h2>
                </Col>
                <Col className={'mt-5 mx-auto w-50'}>
                    <Form>
                        <Form.Group className={'mb-3'} controlId={'formEmail'}>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type={'email'} placeholder={'luis@kleptonix.com'}/>
                            <Form.Text className={'text-muted'}>
                                Enter your <span style={logoStyle}>KLEPTONIX</span> account email.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className={'mb-3'} controlId={'formPassword'}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type={'password'} placeholder={'Password'}/>
                            <Form.Text className={'text-muted'}>
                                Enter the password for your account.
                            </Form.Text>
                        </Form.Group>

                        <div>
                            <Button className={'d-flex mt-5 mx-auto'} variant={'dark'} type={'submit'}>
                                Sign In
                            </Button>
                        </div>
                    </Form>
                </Col>
                <Col className={'d-flex mt-5'}>
                    <div className={'mx-auto'}>
                        <p>No account yet? <a href={'/signup'} style={{color: 'black'}}>Sign Up</a>.</p>
                    </div>
                </Col>
            </Container>
        </>
    )
}

export default SignIn