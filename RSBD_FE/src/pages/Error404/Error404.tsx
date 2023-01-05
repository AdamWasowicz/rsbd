import React from 'react';
import './style.scss';
import ErrorMessage from '../../components/ErrorMessage';

const Error404: React.FunctionComponent = () => {

    return (
        <div className='Error'>
            <ErrorMessage
                title='404'
                textContent='The page that you are looking for does not exist, please try using navigation to find your way around the app. Have a nice day.'
            />
        </div>
    )
}

export default Error404;