import React from 'react'
import './Loader.css'

function Loader() {
    return (
        <>
            <div className='default-loader-container'>  
            <div class="spinner-border loader-box" role="status">
                <span class="sr-only">Loading...</span>
            </div>
            </div>
        </>
    )
}

export default Loader
