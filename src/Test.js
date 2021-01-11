import React from 'react'
import text from './atoms/Text'
import input from './atoms/Input'

class Test extends React.Component{
    render(){
        return (
            <div class="container">
                <text>{this.text="Login"}</text>
                <text></text>
                
                <text>{this.text="Username:"}</text><input></input>

                <text>{this.text="Password:"}</text><input></input>
                

            </div>
        );
    }
}

export default Test;