import '../assets/styles/FormTextArea.css'

const FormTextArea = ({ label, placeholder, setInput, isRequired, name }) => {
    const inputName = name || undefined;

    return ( 
        <div className="textarea-design">
            <div className="textarea-outside">
                <div className="textarea-inside">
                    <label>{label}</label>
                    <textarea 
                        name={inputName}
                        type="text" 
                        required={isRequired ? 'required' : undefined}
                        placeholder={placeholder}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}
 
export default FormTextArea;