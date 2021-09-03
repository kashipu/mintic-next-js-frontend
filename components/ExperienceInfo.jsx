export default function ExperienceInfo({ info, divider = true }) {
    const { id, company_name, position_name, company_start_date, company_end_date, achievements, responsabilities, city} = info;

    return (
        <>
            <div className="education_item">
                <table>
                    <tbody>
                        <tr>
                            <td className="row__title"><span>Cargo:</span></td>
                            <td>{position_name}</td>
                        </tr>
                        <tr>
                            <td className="row__title"><span>Empresa:</span></td>
                            <td>{company_name}</td>
                        </tr>
                        <tr>
                            <td className="row__title"><span>Descripción:</span></td>
                            <td>{responsabilities}</td>
                        </tr>
                        <tr>
                            <td className="row__title"><span>Fecha de inicio:</span></td>
                            <td>{ new Date(company_start_date).toLocaleDateString() }</td>
                        </tr>
                        <tr>
                            <td className="row__title"><span>Fecha final:</span></td>
                            <td>{ company_end_date ? new Date(company_end_date).toLocaleDateString() : "En Curso" }</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            { divider && <hr className="divider--gray"/> }
        </>
    );
}