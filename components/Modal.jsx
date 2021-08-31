export default function Modal({ title, children, onClose }) {
    return (
        <>
            <div className="overlay">
                <div className="modal--container">
                    <div
                        className="modal--close"
                        onClick={() => onClose()}
                    >
                        <div className="button-close">
                            <p>X</p>
                        </div>
                    </div>
                    <div className="modal--header">
                        <h2 className="h2">{title}</h2>
                    </div>
                    <div className="modal--body">{children}</div>
                </div>
            </div>
        </>
    );
}
