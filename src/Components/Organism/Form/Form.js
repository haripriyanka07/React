import Btn from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';
import TextArea from '../../atoms/TextArea/TextArea';
import './Form.css'

const Form = (props) => {
    let handleChange = (e) => {
        e.preventDefault();
        
        props.onSubmit();
    }

    return (
        <form id="newform" className="form" onSubmit={handleChange}>
            {props.data.map(val => 
                <div key={val.label}>
                    <Label>{val.label}</Label>
                    {
                        val.type === "TextArea" ? (<TextArea type={val.type} placeholder={val.placeholder} onChange={val.setValue} value={val.value} />) : (<Input type={val.type} placeholder={val.placeholder} onChange={val.setValue} value={val.value} />)
                    }
                </div>
            )}
            <Btn width="100%" background="black" color="white" value="submit" type="submit" />
        </form>
    );
}
export default Form;