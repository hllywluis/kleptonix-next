import Head from 'next/head'

import {Button, Col, Container, Form} from "react-bootstrap";

const SignUp = props => {
    const logoStyle = {
        fontFamily: 'Bungee'
    }

    const headingStyle = {
        fontFamily: 'Roboto Slab'
    }

    return (
        <>
            <Head>
                <title>Kleptonix | Sign Up</title>
                <meta name={'description'} content={'Sign up for a Kleptonix account.'}/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Container>
                <Col className={'d-flex justify-content-center mt-5'}>
                    <h2 style={headingStyle}>Sign Up</h2>
                </Col>
                <Col className={'mt-5 mx-auto w-50'}>
                    <Form>
                        <Form.Group className={'mb-3'} controlId={'formEmail'}>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type={'email'} placeholder={'luis@kleptonix.com'}/>
                            <Form.Text className={'text-muted'}>
                                Enter an email for your new <span style={logoStyle}>KLEPTONIX</span> account.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className={'mb-3'} controlId={'formPassword'}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type={'password'} placeholder={'Password'}/>
                            <Form.Text className={'text-muted'}>
                                Enter a password for your new account.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className={'mb-3'} controlId={'formConfirmPassword'}>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type={'password'} placeholder={'Password Again'}/>
                            <Form.Text className={'text-muted'}>
                                Enter the password again to confirm it.
                            </Form.Text>
                        </Form.Group>

                        <div>
                            <Button className={'d-flex mt-5 mx-auto'} variant={'dark'} type={'submit'}>
                                Sign Up
                            </Button>
                        </div>
                    </Form>
                </Col>
                <Col className={'d-flex mt-5'}>
                    <div className={'mx-auto'}>
                        <p>Already have an account? <a href={'/signin'} style={{color: 'black'}}>Sign In</a>.</p>
                    </div>
                </Col>
            </Container>
        </>
    )
}

export default SignUp