export default function collapseContent({ title, children }) {
    return (
        <div>
            <div className="collapse__box">
                <button className="collapse__title">
                    <h2 className="h2"> { title }</h2>
                </button>
                <div className="collapse__content">
                    { children }
                </div>
            </div>
        </div>
    );
}
