import Heading from '../atoms/Heading'
import { Paragraph } from '../atoms/Paragraph'

export function Container(props) {
    return (
        <div>
            <Heading value={props.heading} style={props.hstyle}/>
            <Paragraph value={props.paragraph} />
        </div>
    )
}