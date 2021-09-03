export default function EducationInfo({ info, divider = true }) {
    const { id, program_name, institution_name, start_date, end_date } = info;

    return (
        <>
            <div className="education_item">
                <table>
                    <tbody>
                        <tr>
                            <td className="row__title"><span>Título Obtenido:</span></td>
                            <td>{ program_name }</td>
                        </tr>
                        <tr>
                            <td className="row__title"><span>Institución:</span></td>
                            <td> { institution_name}</td>
                        </tr>
                        <tr>
                            <td className="row__title"><span>Fecha de inicio:</span></td>
                            <td>{ new Date(start_date).toLocaleDateString() }</td>
                        </tr>
                        <tr>
                            <td className="row__title"><span>Fecha final:</span></td>
                            <td>{ end_date ? new Date(end_date).toLocaleDateString() : "En Curso" }</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            { divider && <hr className="divider--gray"/> }
        </>
    );
}
