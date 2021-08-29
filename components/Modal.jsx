export default function Modal({ onCloseModal }) {
    const handleClickCloseModal = () => {
        console.log('Closing modal');
        onCloseModal();
    }

    return (
        <div>
            <div className="overlay">
                <div className="modal--container">
                    <div 
                        className="modal--close" 
                        onClick={handleClickCloseModal}
                    >
                        <div className="button-close">
                            <p>X</p>
                        </div>
                    </div>
                    <div className="modal--header">
                        <h2 className="h2">Vamos a exportar tu hoja de vida en formato PDF</h2>
                    </div>
                    <div className="modal--body">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam sit amet scelerisque mauris.
                            Pellentesque elementum, si ya tienes cuenta ingresa
                            aquí
                        </p>
                    </div>
                    <div className="modal--button">
                        <button className="btn-nx btn-nx-primary">
                            Descargar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
