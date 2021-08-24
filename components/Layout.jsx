import Navbar from '../components/Navbar'

export default function Layout({children}) {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main>
                {children}
            </main>
            <footer>
                Footer
            </footer>
        </div>
    )
}
