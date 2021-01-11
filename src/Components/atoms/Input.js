import React from 'react';

export default function Input (props) {
    return (
        <input type={props.type} placeholder={props.details} onChange={(e) => props.onChange(e.target.value)} value={props.value} />
    );
}
// const Input = (props) => <input value={props.value} onChange={props.onChange} />
// export default Input;