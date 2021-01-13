import Heading from '../../atoms/Heading/Heading'
import { Paragraph } from '../../atoms/Paragraph'
import './Container.css'

export function Container(props) {
    return (
        <div className="top">
            <Heading value={props.heading} style={props.hstyle}/>
            <Paragraph value={props.paragraph} />
        </div>
    )
}