

function Formfield (labelName, placeholder, type, value, onChange) {

    return (
        <div>
            <label htmlFor={labelName}>{labelName}</label>
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