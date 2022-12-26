import React from 'react';
import { regionIdType } from '../../hooks/useAppAPI/types';
import useServer from './utils';
import './style.scss'

export interface ServerProps {
    regionId: regionIdType,
    isPrimary: boolean,
}

const Server: React.FC<ServerProps> = (props) => {
    const {
        status
    } = useServer(props);

    return (
        <div className='Server'>
            <div className='Text'>
                <div className='Id'>
                    {props.regionId.toUpperCase()}
                </div>

                <div className='Position'>
                    {props.isPrimary ? 'Write' : 'Read'}
                </div>
            </div>


            <div className={`Status ${status ? 'Up' : 'Down'}`} />
        </div>
    )
}

export default Server;