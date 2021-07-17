import {getLoginSession} from "../../lib/auth"
import {findUser} from "../../lib/user"

const user = async (req, res) => {
    try {
        const session = await getLoginSession(req)
        const user = (session && (await findUser(session))) ?? null

        res.status(200).json({user})
    } catch (error) {
        console.error(error)
        res.status(500).end('Auth token invalid, please sign in.')
    }
}