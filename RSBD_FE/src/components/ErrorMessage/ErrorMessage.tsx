import React from 'react';
import './style.scss';

interface ErrorMessage {
    title: string,
    textContent: string
}

const ErrorMessage: React.FC<ErrorMessage> = (props) => {
    return (
        <div className='ErrorMessage'>
            <h1>{ props.title }</h1>

            <p>{ props.textContent }</p>
        </div>
    )
}

export default ErrorMessage