import Head from 'next/head'

import {PrismaClient} from '@prisma/client'

import {Container, Card} from 'react-bootstrap'

export async function getServerSideProps() {
    const prisma = new PrismaClient()

    const posts = await prisma.posts.findMany()

    prisma.$disconnect()

    return {
        props: {
            posts
        }
    }
}

const Feed = props => {
    const {posts} = props

    const kleptonixLogoStyle = {
        fontFamily: 'Bungee'
    }

    const headingStyle = {
        fontFamily: 'Roboto'
    }

    return (
        <>
            <Head>
                <title>Kleptonix | Feed</title>
                <meta name={'description'} content={'Where communities shine together.'}/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Container className={'d-flex justify-content-center'} fluid>
                {posts.length === 0 && (
                    <>
                        <Card className={'mt-5'} style={{width: '33%'}}>
                            <Card.Header style={headingStyle}>Oh no!</Card.Header>
                            <Card.Body>
                                <Card.Title style={headingStyle}>You broke <span style={kleptonixLogoStyle}>Kleptonix</span>. Excellent work! 🎉</Card.Title>
                                <Card.Subtitle className={'text-muted'} style={headingStyle}>Or maybe there just aren&apos;t any posts yet.</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </>
                )}
            </Container>
        </>
    )
}

export default Feed