import React from 'react';
import ServersContainer from '../../components/ServersContainer/ServersContainer';
import './style.scss'


const Servers: React.FC = () => {

    return (
        <div className='Servers'>
            <div className='Content'>
                <ServersContainer/>
            </div>
        </div>
    )
}

export default Servers;