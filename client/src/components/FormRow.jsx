const FormRow = ({ type, name, labelText, defaultValue, placeholder, onChange }) => {
    return (
        <div className='form-row'>
            <label htmlFor={name} className='input-label blind'>
                {labelText || name}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                className='input-write'
                placeholder={placeholder}
                defaultValue={defaultValue || ''}
                onChange={onChange}
                required
            />
        </div>
    );
};
export default FormRow;