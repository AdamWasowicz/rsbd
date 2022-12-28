import React from 'react';
import './style.scss';

interface ErrorMessage {
    tittle: string,
    textContent: string
}

const ErrorMessage: React.FC<ErrorMessage> = (props) => {
    return (
        <div className='ErrorMessage'>
            <h1>{ props.tittle }</h1>

            <p>{ props.textContent }</p>
        </div>
    )
}

export default ErrorMessage