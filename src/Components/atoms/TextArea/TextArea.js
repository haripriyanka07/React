const TextArea = (props) => {
    return (
        <div>
            <textarea type={props.type} placeholder={props.placeholder} onChange={(e) => props.onChange(e.target.value)} value={props.value}></textarea>
        </div>
    )
}
export default TextArea;