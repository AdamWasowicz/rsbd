import React from 'react';
import { NavigationRoute } from './types';
import './style.scss';
import useNavigation from './utils';

interface NavigationProps {
    routes: NavigationRoute[]
}

const Navigation: React.FC<NavigationProps> = (props) => {
    const {
        renderNavigationElement
    } = useNavigation();

    return (
        <div className='Navigation'>
            {
                props.routes.map((element, index) => {
                    return renderNavigationElement(element, index)
                })
            }
        </div>
    )
}

export default Navigation;