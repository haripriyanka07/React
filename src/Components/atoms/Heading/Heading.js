export default function Heading(props) {
    return (
        <h1 data-testid="h1tag" style={props.style}>{props.value}</h1>
    )
}

