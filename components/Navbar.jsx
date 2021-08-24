import Image from 'next/image'
import LoginImage from '../public/img/loginimage.png'
import Logo from '../public/img/logo.png'

export default function Navbar() {
  return (
    <div>
        <header>
        <div class="nav__container wrapper">
            <nav class="nav">
                <div class="nav__logo flex__center">
                    <Image class="img-logo" src={Logo}></Image>
                </div>
                <div class="nav__items flex__center">
                    <ul>
                        <li> <a href="">Inicio</a></li>
                        <li> <a href="">Cursos</a></li>
                        <li> <a href="">Capacitaciones</a></li>
                        <li> <a href="">Empresas</a></li>
                        <li> <a href="">Soporte</a></li>
                    </ul>
                </div>
                <div class="nav__button flex__center">
                    <button type="button" class="button button-color"> Ingresar</button>
                </div>
            </nav>
        </div>
    </header>
    </div>
  )
}
