import React from 'react';
import './style.css';

import { strengthIndicator, strengthColor } from './strength-password';

export default function PasswordInput(props) {

    const strength = strengthIndicator(props.value);
    const color = strengthColor(strength);

    return (
        <input
            type='password'
            value={props.value}
            className='password-input'
            placeholder={props.placeholder}
            onChange={props.handleChanges}
            style={{
                borderColor: color
            }}
        />
    )
}