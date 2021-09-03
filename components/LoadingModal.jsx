import Image from "next/image";
import Modal from "../components/Modal";
import loadingBars from "../public/img/loadingBars.gif";
import loadingPacman from "../public/img/loadingPacman.gif";
import logo from "../public/img/logo.png"

export default function loading() {
    return (
        <div>
            <Modal title="Cargando..." hideCloseButton={true}><br></br>
                <Image src={logo}></Image><br></br>
                <Image src={loadingBars}></Image>
            </Modal>
        </div>
    )
}
