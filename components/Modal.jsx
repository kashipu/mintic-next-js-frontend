export default function Modal({
    title,
    children,
    onClose,
    hideCloseButton = false
}) {
    return (
        <>
            <div className="overlay">
                <div className="modal--container">
                    {!hideCloseButton && (
                        <div className="modal--close" onClick={() => onClose()}>
                            <div className="button-close">
                                <p>X</p>
                            </div>
                        </div>
                    )}
                    <div className="modal--header">
                        <h2 className="h2">{title}</h2>
                    </div>
                    <div className="modal--body">{children}</div>
                </div>
            </div>
        </>
    );
}
