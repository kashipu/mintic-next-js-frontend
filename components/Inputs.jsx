export default function Inputs({name, id, type, placeholder, onChange, value }) {
    return (
        <div>
            <div className="form__group___item">
                <label htmlFor={id}>{name}</label>
                <input 
                    id={id}
                    name={name}
                    type={type} 
                    placeholder={placeholder} 
                    onChange={onChange} 
                    value={value}
                />
            </div>
        </div>
    );
}
