import React from 'react'
// import '../Style/Style.css'
import { Button } from '../Button/Button';
import { GiMusicalScore } from 'react-icons/gi';
import { GiBlackBook } from 'react-icons/gi';

function HomePage() {
    return (
        <div className='home-container'>
            <video src=
            "week--project\public\music\song.mp3"
            autoPlay loop muted />
            <h2 className='home-title1'>BOOK LIBRARY</h2>
            <p>Knowlege is power -Keep reading...</p>
            <div className='home-btns'>
            <Button
             className='btns'
             buttonStyle='btn--outline'
             buttonSize='btn--large'
             >
              GET STARTED <GiMusicalScore/>  
            </Button>
            <Button
             className='btns'
             buttonStyle='btn--primary'
             buttonSize='btn--large'
             >
              COOSE a BOOK <GiBlackBook/>  
            </Button>
            </div>
        </div>
    )
}

export default HomePage
