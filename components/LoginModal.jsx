import { useState } from "react";
import Modal from "../components/Modal";
import Inputs from "../components/Inputs";
import { useAppContext } from '../context/AppContext';

export default function LoginModal() {
    const initialState = { email: '', password: '' };
    const [userInfo, setUserInfo] = useState(initialState);

    const { loginModal, setLoginModal } = useAppContext();

    const handleCloseLoginModal = () => {
        console.log('closing modal...')
        setLoginModal(false);
    }

    const handleInputChange = ({target}) => {
        const { id, value } = target;
        setUserInfo({...userInfo, [id]: value})
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userInfo);
        setUserInfo(initialState);
    };

    return (
        loginModal && 
            <Modal onClose={handleCloseLoginModal}>
                <form onSubmit={handleSubmit}>
                    <Inputs
                        name="Email"
                        id="email"
                        type="text"
                        onChange={handleInputChange}
                        value={userInfo.email}
                    />
                    <Inputs
                        name="Contraseña"
                        id="password"
                        type="password"
                        onChange={handleInputChange}
                        value={userInfo.password}
                    />
                    <div className="button__submit">
                        <button
                            className="btn-nx btn-nx-primary"
                            type="submit"
                        >
                            Ingresar
                        </button>
                    </div>
                </form>
            </Modal>
    );
}
