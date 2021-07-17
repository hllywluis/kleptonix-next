import passport from 'passport'
import nextConnect from 'next-connect'
import {localStrategy} from "../../lib/password-local"
import {setLoginSession} from "../../lib/auth"

const authenticate = (method, req, res) => {
    new Promise((resolve, reject) => {
        passport.authenticate(method, {session: false}, (error, token) => {
            if (error) {
                reject(error)
            } else {
                resolve(token)
            }
        })(req, res)
    })
}

passport.use(localStrategy)

const connect = nextConnect().use(passport.initialize(undefined)).post(async (req, res) => {
    try {
        const user = await authenticate('local', req, res)
        const session = {...user}

        await setLoginSession(res, session)

        res.status(200).send({done: true})
    } catch (error) {
        console.error(error)
        res.status(401).send(error.message)
    }
})

export default connect