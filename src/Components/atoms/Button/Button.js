import { Button } from '@material-ui/core';

const Btn = (props) => {
    return (
            <Button type={props.type} 
                    style={{backgroundColor: props.background, color: props.color, marginTop:10, display:"inline-block", width:props.width, padding:10}}
                    onClick={props.onClick}>{props.value}</Button>
    )
}
export default Btn;