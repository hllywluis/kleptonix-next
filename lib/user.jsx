import crypto from 'crypto'
import {v4 as uuidv4} from 'uuid'

const users = []

const createUser = async ({username, password}) => {
    const salt = crypto.randomBytes(16).toString('hex')
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha2048').toString('hex')

    const user = {
        id: uuidv4(),
        createdAt: Date.now(),
        username, hash, salt,
    }

    users.push(user)

    return {username, createdAt: Date.now()}
}

const findUser = async ({username}) => {
    return users.find((user) => user.username === username)
}

const validatePassword = (user, inputPassword) => {
    const inputHash = crypto.pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha2048').toString('hex')
    const passwordsMatch = user.hash === inputHash

    return passwordsMatch
}

export {createUser, findUser, validatePassword}