import {useEffect} from "react"
import Router from 'next/router'

import useSWR from "swr"

const fetcher = (url) => {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            return {user: data?.user || null}
        })
}

const useUser = ({redirectTo, redirectIfFound} = {}) => {
    const {data, error} = useSWR('/api/user', fetcher)
    const user = data?.user
    const finished = Boolean(data)
    const hasUser = Boolean(user)

    useEffect(() => {
        if (!redirectTo || !finished) {
            return
        }
        if (
            (redirectTo && !redirectIfFound && !hasUser) ||
            (redirectIfFound && hasUser)
        ) {
            Router.push(redirectTo).then()
        }
    }, [redirectTo, redirectIfFound, finished, hasUser])

}

export {useUser}