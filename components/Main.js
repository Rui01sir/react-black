import React from 'react';
import videoBg from '../assets/videoBg.MP4'

function Main(){
    return(
        <>
        <div className='b-back-video'>
            <video src={videoBg} autoPlay loop muted/>
        </div>
        </>
    )
}

export default Main;