import './Input.css';

const Input = (props) => {
    return (
        <input type={props.type} placeholder={props.details} onChange={(e) => props.onChange(e.target.value)} value={props.value} />
    );
}
export default Input;
