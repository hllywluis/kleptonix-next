import Local from 'passport-local'
import {findUser, validatePassword} from './user'

const localStrategy = new Local.Strategy((username, password, done) => {
    findUser({username}).then((user) => {
        if (user && validatePassword(user, password)) {
            done(null, user)
        } else {
            done(new Error('Invalid username and password.'))
        }
    }).catch((error) => {
        done(error)
    })
})

export {localStrategy}