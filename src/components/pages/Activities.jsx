import React from 'react'
import './Activities.css'
import BANANA from './mediapage/BANANA.png'
import KARAOKE from './mediapage/KARAOKE.png'
import MASSAGE from './mediapage/MASSAGE.png'
import GAME from './mediapage/GAME.png'

const Activities = () => {
  return (
    <>
    
    <div id='acti' className="Act">
   <header><h1>ACTIVITIES</h1></header> 
    <div className="container2">

        <div className="itemRoom2 itemTop2">
        <img src={BANANA} />
        <p className='TITLE'>BANANA BOATING</p>
        <p className='DESC'>Experience the exhilaration of riding atop a banana-shaped inflatable towed by a motorboat, offering thrilling moments and group fun on the water.</p>
        </div>
       
        <div className="itemRoom2 itemTop2">
        <img src={KARAOKE} />
        <p className='TITLE'>KARAOKE</p>
        <p className='DESC'>Unleash your inner rock star or crooner with a microphone in hand, belting out favorite tunes while enjoying a fun and entertaining musical experience.</p>
        </div>
        
        <div className="itemRoom2 itemBottom2">
        <img src={MASSAGE} />
        <p className='TITLE'>MASSAGE</p>
        <p className='DESC'>Relax and rejuvenate as expert hands work out the stress and tension, soothing muscles and promoting a sense of tranquility and well-being.</p>
        </div>

        <div className="itemRoom2 itemBottom2">
        <img src={GAME} />
        <p className='TITLE'>GAMES</p>
        <p className='DESC'>Enjoy a variety of activities, from beach volleyball, basketball to billiards and board games, offering endless fun and entertainment for all.</p>
        </div>


    </div>



    </div>
    
    
    </>
  )
}

export default Activities