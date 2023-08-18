import '../assets/styles/FormTextArea.css'

const FormTextArea = ({ label, placeholder, setInput }) => {
    return ( 
        <div className="textarea-design">
            <div className="textarea-outside">
                <div className="textarea-inside">
                    <label>{label}</label>
                    <textarea 
                        type="text" 
                        required
                        placeholder={placeholder}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}
 
export default FormTextArea;