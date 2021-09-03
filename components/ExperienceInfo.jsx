export default function ExperienceInfo({ info, divider = true }) {
    

    return (
        <>
            <div className="education_item">
                <table>
                    <tbody>
                        <tr>
                            <td className="row__title"><span>Cargo:</span></td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td className="row__title"><span>Empresa:</span></td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td className="row__title"><span>Fecha de inicio:</span></td>
                            <td>{/* { new Date(start_date).toLocaleDateString() } */}</td>
                        </tr>
                        <tr>
                            <td className="row__title"><span>Fecha final:</span></td>
                            <td>{/* { end_date ? new Date(end_date).toLocaleDateString() : "En Curso"  */}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            { divider && <hr className="divider--gray"/> }
        </>
    );
}