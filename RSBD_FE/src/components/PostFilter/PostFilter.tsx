import React from 'react';
import './style.scss';
import usePostFilter from './utils';


const PostFilter: React.FC = () => {
    const {
        fetchEU, fetchUS, fetchAS,
        handleFetchEuToggle, handleFetchUsToggle, handleFetchAsToggle
    } = usePostFilter();

    return (
        <div className='PostFilter'>
            <h1>Region Filter: </h1>
            <div className='Content'>
                <div className='Field'>
                    <h2>EU</h2>

                    <input
                        type='checkbox'
                        value={'EU'}
                        checked={fetchEU}
                        onChange={handleFetchEuToggle}
                    />
                </div>

                <div className='Field'>
                    <h2>US</h2>

                    <input
                        type='checkbox'
                        value={'US'}
                        checked={fetchUS}
                        onChange={handleFetchUsToggle}
                    />
                </div>

                <div className='Field'>
                    <h2>AS</h2>

                    <input
                        type='checkbox'
                        value={'AS'}
                        checked={fetchAS}
                        onChange={handleFetchAsToggle}
                    />
                </div>
            </div>
        </div>
    )
}

export default PostFilter;