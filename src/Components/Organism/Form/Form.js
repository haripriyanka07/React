import Btn from '../../atoms/Button/Button';
import Input from '../../atoms/Input';
import Label from '../../atoms/Label';
import TextArea from '../../atoms/TextArea';
import './index.css'
// import Button from 'react-bootstrap/Button'

export default function Form(props){


    let handleChange = (e) => {
        e.preventDefault();
        console.log("CCCCs");
        console.log(e.target);
        props.onSubmit();
    }

    return (
        <form className="form" onSubmit={handleChange}>
            {props.data.map(val => 
                <div key={val.label}>
                    <Label value={val.label}/>
                    {
                        val.type === "TextArea" ? (<TextArea type={val.type} details={val.details} onChange={val.setValue} value={val.value} />) : (<Input type={val.type} details={val.details} onChange={val.setValue} value={val.value} />)
                    }
                </div>
            )}
            <Btn width="100%" background="black" color="white" value="submit" type="submit" />
        </form>
    );
}
