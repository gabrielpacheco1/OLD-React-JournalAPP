import React from 'react'

export const JournalEntry = () => {
    return (
        <div className='journal__entry'>
            <div 
                className='journal__entry-picture'
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://pbs.twimg.com/profile_images/640666088271839233/OTKlt5pC.jpg)'
                }}
            ></div> 

        <div className='journal__entry-body'>
            <p className='journal__entry-title'>
                Un nuevo día
            </p>
            <p className='journal__entry-content'>
                Una nueva linea para rellenar con texto luego
            </p>
        </div>

        <div className='journal__entry-date-box'>
            <span>Monday</span>
            <h4>28</h4>
        </div>
            
        </div>
    )
}
