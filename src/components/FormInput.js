import '../assets/styles/FormInput.css'

const FormInput = ({ label, placeholder, setInput, type, name}) => {
    const inputType = type || "text";
    const inputName = name || undefined;

    return ( 
        <div className="input-design">
            <div className="input-outside">
                <div className="input-inside">
                    <label>{label}</label>
                    <input 
                        name={inputName}
                        type={inputType} 
                        required
                        placeholder={placeholder}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}
 
export default FormInput;