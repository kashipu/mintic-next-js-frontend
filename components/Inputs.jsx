export default function Inputs({name, id, type, placeholder }) {
    return (
        <div>
            <div class="form__group___item">
                <label for={id}>{name}</label>
                <input id={id} type={type} placeholder={placeholder} />
            </div>
        </div>
    );
}
