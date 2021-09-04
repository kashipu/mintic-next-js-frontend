import { useAppContext } from "../../context/AppContext";
import Modal from "../Modal";

const PersonalInfoEditModal = () => {
    const { editModals, setEditModals } = useAppContext();

    const handleCloseModal = () => {
        setEditModals({
            ...editModals,
            personalInfo: false
        });
    };

    return (
        <>
            {editModals.personalInfo && (
                <Modal
                    title="Información Personal"
                    onClose={handleCloseModal}
                >
                    <h2>joasjioasdf</h2>
                </Modal>
            )}
        </>
    );
};

export default PersonalInfoEditModal;
