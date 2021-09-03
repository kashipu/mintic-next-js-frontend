import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";

import HeadNav from "../components/HeadNav";
import Collapse from "../components/collapseContent";
import ImageUser from "../components/ImageUser";
import EducationInfo from "../components/EducationInfo";
import LoadingModal from "../components/LoadingModal";

import { educacion as educationArray } from "../data/example";

const PERSONAL_INFO = gql`
    query GetUserInfo($userId: ID) {
        getUserPersonalInfo(userId: $userId) {
            name
            lastname
            cellphone
            email
            city
            description
            dni
            dob
            skills
        }
        getAllProfessionalLinks(userId: $userId) {
            results {
                id
                social_network {
                    name
                }
                url
            }
        }
        getUserExperienceInfo(userId: $userId) {
            results {
                position_name
                company_name
                city
                company_start_date
                company_end_date
                responsabilities
                achievements
            }
        }
        getUserEducationInfo(userId: $userId) {
            results {
                institution_name
                description
                end_date
                start_date
                program_name
                program_type {
                    name
                }
            }
        }
    }
`;

const EXPERIENCE_INFO = gql`
    query GetUserInfo($userId: ID) {
        getUserExperienceInfo(userId: $userId) {
            results {
                position_name
                company_name
                city
                company_start_date
                company_end_date
                responsabilities
                achievements
            }
        }
    }
`;

const EDUCATION_INFO = gql`
    query GetUserInfo($userId: ID) {
        getUserEducationInfo(userId: $userId) {
            results {
                institution_name
                description
                end_date
                start_date
                program_name
                program_type {
                    name
                }
            }
        }
    }
`;

const PROFESIONAL_LINKS = gql`
    query GetUserInfo($userId: ID) {
        getAllProfessionalLinks(userId: $userId) {
            results {
                id
                social_network {
                    name
                }
                url
            }
        }
    }
`;

const initialErrorState = {
    error: false,
    token: ""
};

export default function Dashboard() {
    // STATES
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(initialErrorState);

    // Router
    const router = useRouter();

    /* Apollo request */
    const { error: errorUser, data: dataUser } = useQuery(PERSONAL_INFO, {
        onError: (error) => {
            console.log(`Message: ${error.message}`);
        }
    });
    const { error: errorExperience, data: dataExperience } = useQuery(
        EXPERIENCE_INFO,
        {
            onError: (error) => {
                console.log(`Message: ${error.message}`);
            }
        }
    );
    const { error: errorEducation, data: dataEducation } = useQuery(
        EDUCATION_INFO,
        {
            onError: (error) => {
                console.log(`Message: ${error.message}`);
            }
        }
    );
    const { error: errorLinks, data: dataLinks } = useQuery(PROFESIONAL_LINKS, {
        onError: (error) => {
            console.log(`Message: ${error.message}`);
        }
    });

    // Verifica si hay token al cargar o sino lo regresa al login
    useEffect(() => {
        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) {
            router.push("/");
        }
    }, []);

    // Escucha cambios en el Apollo Request
    // debugger;
    useEffect(() => {
        console.log(dataUser?.getUserPersonalInfo);
        console.log(dataExperience?.getUserExperienceInfo);
        console.log(dataEducation?.getUserEducationInfo);
        console.log(dataLinks?.getAllProfessionalLinks);
    }, [
        errorUser,
        dataUser,
        errorExperience,
        dataExperience,
        errorEducation,
        dataEducation,
        errorLinks,
        dataLinks
    ]);

    // ==============================================
    // =============== PAGE RENDERING ===============
    // ==============================================

    // La página ya cargó y el token es inválido
    if (!loading && !userInfo) {
        router.push("/");
    }

    // La página ya cargó y el token es válido - muestra el dashboard
    if (!loading && userInfo) {
        return (
            <div>
                <Head>
                    <title>Hola Mundo</title>
                    <meta
                        name="description"
                        content="Generated by create next app"
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <HeadNav />
                <main>
                    <div className="screen__dashboard wrapper">
                        <div className="dashboard__main">
                            <div className="dashboard__head">
                                <h1 className="h1">
                                    Bienvenido, <br /> Juan José Perdomo
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Etiam sit amet scelerisque
                                    mauris. Pellentesque elementum elementum
                                    lectus, ut iaculis sem tincidunt commodo. Ut
                                    a malesuada
                                </p>
                            </div>
                            <div className="dashboard__content">
                                <Collapse title="Perfil profesional">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Distinctio eum quaerat
                                        quia excepturi cumque, iste molestiae,
                                        saepe veritatis aliquid tempora veniam
                                        laudantium. Consequatur, quo possimus
                                        nihil aspernatur id vel itaque?
                                    </p>
                                </Collapse>
                                <Collapse title="Educación" variant="education">
                                    {educationArray.map((info, idx) => (
                                        // [item0, item1, item2] -- idx: 0, 1, 2
                                        // educationArray.length - 1 : Ultimo elemento del array
                                        // Devuelve: True, True, False
                                        <EducationInfo
                                            info={info}
                                            key={info._id}
                                            divider={
                                                educationArray.length - 1 !==
                                                idx
                                            }
                                        />
                                    ))}
                                </Collapse>
                            </div>
                        </div>
                        <div className="dashboard__aside">
                            <ImageUser />
                        </div>
                    </div>
                </main>
            </div>
        );
    }

    // Mientras la página carga la información del usuario
    return <LoadingModal />;
}
