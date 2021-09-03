import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "../context/AppContext";
import logo from "../public/img/logo.svg";

export default function HeadNav() {
    const { setLoginModal, userLoggedIn, handleLogout } = useAppContext();

    return (
        <div>
            <header className="header">
                <div className="wrapper">
                    <nav className="nav">
                        <div className="container__logo">
                            <Image
                                src={logo}
                                alt="Logo, make a resume"
                                width={90}
                                height={53}
                            />
                        </div>
                        <div className="container__nav">
                            <ul>
                                <li>
                                    <Link href="/loading">
                                        <a>Inicio</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/loading">
                                        <a>Cursos</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/loading">
                                        <a>Empresas</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/loading">
                                        <a>Soporte</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="container__button">
                            {userLoggedIn ? (
                                <button
                                    type="button"
                                    className="btn-nx btn-nx-primary"
                                    onClick={() => handleLogout()}
                                >
                                    Salir
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className="btn-nx btn-nx-primary"
                                    onClick={() => setLoginModal(true)}
                                >
                                    Ingresar
                                </button>
                            )}
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    );
}
