// React - Next imports
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Components
import HeadNav from "../components/HeadNav";
import Collapse from "../components/collapseContent";
import ImageUser from "../components/ImageUser";
import EducationInfo from "../components/EducationInfo";
import LoadingModal from "../components/LoadingModal";
import ExperienceInfo from "../components/ExperienceInfo";
import SkillsInfo from "../components/SkillsInfo";

// Custom Hooks
import useGetPersonalInfo from "../hooks/useGetPersonalInfo";
import useGetExperienceInfo from "../hooks/useGetExperienceInfo";
import useGetEducationInfo from "../hooks/useGetEducationInfo";
import useGetProfessionalLinks from "../hooks/useGetProfessionalLinks";

// Context
import { useAppContext } from "../context/AppContext";

// Data mocks
import { educacion as educationArray } from "../data/example";
import LinksInfo from "../components/LinksInfo";

const initialErrorState = {
    error: false,
    token: ""
};

export default function Dashboard() {
    // CONTEXT
    const { setUserLoggedIn } = useAppContext();

    // STATES
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(initialErrorState);

    // Router
    const router = useRouter();

    /* Apollo request */
    const { dataUser, loadingUser } = useGetPersonalInfo();
    const { dataExperience, loadingExperience } = useGetExperienceInfo();
    const { dataEducation, loadingEducation } = useGetEducationInfo();
    const { dataLinks, loadingLinks } = useGetProfessionalLinks();

    // Verifica si hay token al cargar o sino lo regresa al login
    useEffect(() => {
        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) {
            router.push("/");
        }
    }, []);

    // Escucha cambios en el Apollo Request
    useEffect(() => {
        if (dataUser) {
            // console.log(dataUser?.getUserPersonalInfo);
            setUserInfo({
                ...userInfo,
                personalInfo: dataUser?.getUserPersonalInfo
            });
        }
    }, [dataUser]);

    useEffect(() => {
        if (dataExperience) {
            // console.log(dataExperience?.getUserExperienceInfo);
            setUserInfo({
                ...userInfo,
                experience: dataExperience?.getUserExperienceInfo
            });
        }
    }, [dataExperience]);

    useEffect(() => {
        if (dataEducation) {
            // console.log(dataEducation?.getUserEducationInfo);
            setUserInfo({
                ...userInfo,
                education: dataEducation?.getUserEducationInfo
            });
        }
    }, [dataEducation]);

    useEffect(() => {
        if (dataLinks) {
            // console.log(dataLinks?.getAllProfessionalLinks);
            setUserInfo({
                ...userInfo,
                links: dataLinks?.getAllProfessionalLinks
            });
        }
    }, [dataLinks]);

    useEffect(() => {
        if (
            !loadingUser &&
            !loadingEducation &&
            !loadingExperience &&
            !loadingLinks
        ) {
            setLoading(false);
        }
    }, [loadingUser, loadingEducation, loadingExperience, loadingLinks]);

    useEffect(() => {
        if (!loading && userInfo) {
            setUserLoggedIn(true);
        }
    }, [loading]);

    // ==============================================
    // =============== PAGE RENDERING ===============
    // ==============================================

    // La página ya cargó y el token es inválido
    if (!loading && !userInfo) {
        router.push("/");
    }
    console.log(userInfo?.links?.results[0].url)
    // La página ya cargó y el token es válido - muestra el dashboard
    if (!loading && userInfo) {
        return (
            <div>
                <Head>
                    <title>
                        {`${userInfo?.personalInfo?.name} ${userInfo?.personalInfo?.lastname}`}{" "}
                        - Make a Res
                    </title>
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
                                    Bienvenido, <br />
                                    <span className="name_h1">
                                        {`${userInfo?.personalInfo?.name} ${userInfo?.personalInfo?.lastname}`}
                                    </span>
                                </h1>
                            </div>
                            <div className="dashboard__content">
                                <Collapse title="Perfil profesional">
                                    <p>{userInfo?.personalInfo?.description}</p>
                                </Collapse>
                                <Collapse title="Educación" variant="education">
                                    {userInfo?.education?.results.map(
                                        (info, idx) => (
                                            <EducationInfo
                                                info={info}
                                                key={idx}
                                                divider={
                                                    educationArray.length -
                                                        1 !==
                                                    idx
                                                }
                                            />
                                        )
                                    )}
                                </Collapse>
                                <Collapse
                                    title="Experiencia profesional"
                                    variant="experience"
                                >
                                    {userInfo?.experience?.results.map(
                                        (info, idx) => (
                                            <ExperienceInfo
                                                info={info}
                                                key={idx}
                                                divider={
                                                    educationArray.length -
                                                        1 !==
                                                    idx
                                                }
                                            />
                                        )
                                    )}
                                </Collapse>

                                <Collapse title="Habilidades" variant="skills">
                                    {userInfo?.personalInfo?.skills.map(
                                        (info, idx) => (
                                            <SkillsInfo info={info} key={idx}/>
                                        )
                                    )}
                                </Collapse>

                                <Collapse title="Enlaces" variant="links">
                                    {userInfo.links.results.map((link, idx) => (
                                        <LinksInfo info={link} key={idx} />
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
