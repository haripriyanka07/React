export default function TextArea(props) {
    return (
        <div>
            <textarea type={props.type} placeholder={props.details} onChange={(e) => props.onChange(e.target.value)} value={props.value}></textarea>
        </div>
    )
    
}  