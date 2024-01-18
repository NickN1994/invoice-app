import "./Formfield.css"


function Formfield ({labelName, placeholder, type, value, onChange}) {

    return (
        <div className='formField'>
            <label htmlFor={labelName}><p><strong>{labelName}:</strong></p></label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default Formfield;
