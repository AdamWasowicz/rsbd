import React from 'react';
import './style.scss';
import useCreatePostForm from './utilts';
import ReactLoading from 'react-loading';

const CreatePostForm: React.FC = () => {
    const {
        handleClickEU, handleClickUS, handleClickAS,
        isRegionSelected,
        email, handleEmailChange,
        textContent, handleTextContentChange,
        handleSubmitButtonClick,
        emailErrors, textContentErrors,
        selectedRegionErrors,
        isFetching
    } = useCreatePostForm();


    return (
        <div className='CreatePostForm'>
            {
                isFetching &&
                <div className='Overlay'>
                    <div className='Cover' />

                    <ReactLoading
                        type={'spin'}
                        height={'50%'}
                        color={'#2592eb'}
                        width={'50%'}
                        className='Loader'
                    />
                </div>
            }

            <div className='Content'>

                <h1>Create Post Form</h1>

                <div className='FieldsContainer'>
                    <div className='Field'>
                        <h2 className={selectedRegionErrors.length > 0 ? 'INVALID' : null}>Region:</h2>

                        <div className='ButtonsContainer'>
                            <button
                                className={`EU ${isRegionSelected('eu') && 'SELECTED'}`}
                                onClick={handleClickEU}
                            >
                                EU
                            </button>

                            <button
                                className={`US ${isRegionSelected('us') && 'SELECTED'}`}
                                onClick={handleClickUS}
                            >
                                US
                            </button>

                            <button
                                className={`AS ${isRegionSelected('as') && 'SELECTED'}`}
                                onClick={handleClickAS}
                            >
                                AS
                            </button>
                        </div>

                        <ul className='Errors'>
                            {
                                selectedRegionErrors.map((element, index) => {
                                    return <li key={index}>{element}</li>
                                })
                            }
                        </ul>
                    </div>

                    <div className='Field'>
                        <h2 className={emailErrors.length > 0 ? 'INVALID' : null}>Email:</h2>

                        <input
                            className={emailErrors.length > 0 ? 'INVALID' : null}
                            type='text'
                            value={email}
                            onChange={handleEmailChange}
                        />

                        <ul className='Errors'>
                            {
                                emailErrors.map((element, index) => {
                                    return <li key={index}>{element}</li>
                                })
                            }
                        </ul>
                    </div>

                    <div className='Field'>
                        <h2 className={textContentErrors.length > 0 ? 'INVALID' : null}>Text Content:</h2>

                        <textarea
                            className={textContentErrors.length > 0 ? 'INVALID' : null}
                            value={textContent}
                            onChange={handleTextContentChange}
                        />

                        <ul className='Errors'>
                            {
                                textContentErrors.map((element, index) => {
                                    return <li key={index}>{element}</li>
                                })
                            }
                        </ul>
                    </div>
                </div>

                <button
                    className='Submit'
                    onClick={handleSubmitButtonClick}
                >
                    Submit
                </button>
            </div>
        </div>
    )
}

export default CreatePostForm;