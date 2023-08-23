import '../assets/styles/FormInput.css'

const FormPasswordInput = ({ label, placeholder, setInput}) => {
    return ( 
        <div className="input-design">
            <div className="input-outside">
                <div className="input-inside">
                    <label>{label}</label>
                    <input 
                        type="password" 
                        required
                        placeholder={placeholder}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}
 
export default FormPasswordInput;