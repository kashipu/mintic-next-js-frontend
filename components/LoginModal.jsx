// React - Next imports
import { useState } from "react";
import { useRouter } from 'next/router';

// Context
import { useAppContext } from "../context/AppContext";

// Apollo dependencies
import { gql, useMutation } from "@apollo/client";

// Custom Components
import Modal from "../components/Modal";
import Inputs from "../components/Inputs";

// Apollo MUTATION
const LOGIN_USER = gql`
    mutation Mutation($authenticateCredentials: CredentialsInput!) {
        authenticate(credentials: $authenticateCredentials) {
            access
            refresh
        }
    }
`;

// Constants
const initialState = { username: "", password: "" };

export default function LoginModal() {
    /* Apollo request */
    const [loginUser, { data, error, loading }] = useMutation(LOGIN_USER);
    // NextJS router
    const router = useRouter();

    const [userInfo, setUserInfo] = useState(initialState);

    const { loginModal, setLoginModal } = useAppContext();

    //!Pending: FIX CLOSE MODAL
    const handleCloseLoginModal = () => {
        console.log("closing modal...");
        setLoginModal(false);
    };

    // Handle Input Changes
    const handleInputChange = ({ target }) => {
        const { id, value } = target;
        setUserInfo({ ...userInfo, [id]: value });
    };

    // Handle user login
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(userInfo);

        loginUser({
            variables: {
                authenticateCredentials: userInfo
            }
        });

        if (error) {
            // !TODO: mostrar error
            // setErrormessage(true);
        }

        // console.log(data?.authenticate, loading, error?.message);
        
        /**
         * !TODO: Aumentar el tiempo de espera de los requests. 
         * !TODO: Mostrar los errores en el formulario.
         * !TODO: Agregarle un loading y deshabilitar el Submit
         */

        if (data?.authenticate) {
            const { access, refresh } = data?.authenticate;
            // Reset form inputs
            setUserInfo(initialState);
            // Save tokens in localStorage
            localStorage.setItem("accessToken", access);
            localStorage.setItem("refreshToken", refresh);
            // Redirect to user dashboard
            router.push('/dashboard');
        }
    };

    return (
        true && (
            <Modal onClose={handleCloseLoginModal}>
                <form onSubmit={handleSubmit}>
                    <Inputs
                        name="Email"
                        id="username"
                        type="text"
                        onChange={handleInputChange}
                        value={userInfo.username}
                    />
                    <Inputs
                        name="Contraseña"
                        id="password"
                        type="password"
                        onChange={handleInputChange}
                        value={userInfo.password}
                    />
                    <div className="button__submit">
                        <button className="btn-nx btn-nx-primary" type="submit">
                            Ingresar
                        </button>
                    </div>
                </form>
            </Modal>
        )
    );
}
