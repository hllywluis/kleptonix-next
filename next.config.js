// eslint-disable-next-line no-undef
module.exports = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/',
                destination: '/feed',
                permanent: true
            }
        ]
    }
}
