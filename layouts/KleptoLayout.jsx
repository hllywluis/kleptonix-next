import KleptoNav from "../components/KleptoNav"

const KleptoLayout = ({children}) => {
    return (
        <>
            <KleptoNav/>
            <main style={{height: '100%'}}>{children}</main>
        </>
    )
}

export default KleptoLayout