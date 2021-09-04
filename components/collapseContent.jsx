import PropTypes from "prop-types";
import { useAppContext } from "../context/AppContext";

const variants = {
    personalInfo: "",
    education: "collapse__education",
    experience: "collapse__experience",
    skills: "collapse__skills",
    links: "collapse_links"
};

export default function CollapseContent({
    title,
    children,
    variant = "default"
}) {
    const { editModals, setEditModals } = useAppContext();

    const handleEdit = () => {
        setEditModals({ ...editModals, [variant]: true });
    };

    return (
        <div>
            <div className="collapse__box">
                <button className="collapse__title" onClick={handleEdit}>
                    <h2 className="h2"> {title}</h2>
                </button>
                <div className={`collapse__content ${variants[variant]}`}>
                    {children}
                </div>
            </div>
        </div>
    );
}

CollapseContent.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf([
        "personalInfo",
        "education",
        "experience",
        "skills",
        "links"
    ])
};
