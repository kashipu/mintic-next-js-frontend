const LinksInfo = ({ info }) => {
    const { url, social_network } = info;
    return (
        <>
            <p>
                {social_network.name} -{" "}
                <a href={url} target="_blank">
                    {url}
                </a>
            </p>
        </>
    );
};

export default LinksInfo;
