import { Link } from "react-router-dom";

export default function link(props) {
    console.log(props);
    return (
        <Link style={{ textDecoration: 'none', padding:10, color: 'black'}} to={props.to}>{props.children}</Link>
    )
}