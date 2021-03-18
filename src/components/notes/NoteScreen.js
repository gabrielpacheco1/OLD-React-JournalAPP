import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className='notes__main-content'>
            <NotesAppBar />

            <div className='notes__content'>
                <input
                    type='text'
                    placeholder='Some title'
                    className='notes__title-input'
                    autoComplete='off'
                />
                <textarea
                    placeholder='What happened today?'
                    className='notes__textarea'
                ></textarea>

                <div className='notes__image'>
                    <img src='https://pbs.twimg.com/profile_images/640666088271839233/OTKlt5pC.jpg' alt='landscape'/>
                </div>
            </div>
        </div>
    )
}
