const FormRow = ({ type, name, labelText, defaultValue, placeholder, onChange, blind }) => {
    return (
        <div className='form-row'>
            <label 
                htmlFor={name} 
                className={!blind ? 'input-label' : 'input-label blind'}
            >
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