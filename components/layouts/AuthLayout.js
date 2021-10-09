import Head from "next/head"
import BottomTabs from "../BottomTabs"

const Layout = ({children, title}) => {

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout
