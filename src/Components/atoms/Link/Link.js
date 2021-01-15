import { Link } from "react-router-dom";
import './Link.css';

const link = (props) => {
    return (
        <Link className="link" to={props.to}>{props.children}</Link>
    )
}
export default link;