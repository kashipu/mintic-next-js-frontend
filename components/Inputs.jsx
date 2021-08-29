export default function Inputs({name, id, type, placeholder }) {
    return (
        <div>
            <div className="form__group___item">
                <label htmlFor={id}>{name}</label>
                <input id={id} type={type} placeholder={placeholder} />
            </div>
        </div>
    );
}
