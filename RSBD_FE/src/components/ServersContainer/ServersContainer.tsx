import React from 'react';
import Server from '../Server/Server';
import './style.scss'
import useServersContainer from './utilts';

const ServersContainer: React.FC = () => {
    const {
        serverList, getServersComponents
    } = useServersContainer();

    return (
        <div className='ServersContainer'>
            {
                getServersComponents()
            }
        </div>
    )
}

export default ServersContainer;
