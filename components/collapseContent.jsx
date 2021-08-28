import PropTypes from "prop-types";

export default function CollapseContent({ title, children, variant = "default" }) {
    const variants = {
        default: "",
        education: "collapse__education",
        experience: "collapse__experience"
    };

    return (
        <div>
            <div className="collapse__box">
                <button className="collapse__title">
                    <h2 className="h2"> { title }</h2>
                </button>
                <div className={`collapse__content ${variants[variant]}`}>
                    { children }
                </div>
            </div>
        </div>
    );
}

CollapseContent.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(["default", "education", "experience"]),
}