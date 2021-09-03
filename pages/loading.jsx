import Image from "next/image";
import Modal from "../components/Modal";
import loadingBars from "../public/img/loadingBars.gif";
import loadingPacman from "../public/img/loadingPacman.gif";

export default function loading() {
    return (
        <div>
            <Modal title="Esto es un modal">
                <Image src={loadingBars}></Image>
                <p>Esta Página esta en reparación</p>
            </Modal>
        </div>
    )
}
