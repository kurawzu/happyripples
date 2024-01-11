import React from 'react'
import './Rooms.css'
import Capiz from './mediapage/Capiz.jpg'
import Villa from './mediapage/Villa.jpg'
import Deluxe from './mediapage/Deluxe.jpg'
import Studio from './mediapage/Studio.jpg'

const Rooms = () => {
  return (
    <>
    
    <div id='room' className="Rooms">
    <header><h1>ACCOMMODATIONS</h1></header> 
   
    <div className="container">
    

        <div className="itemRoom itemTop">
        <img src={Capiz} />
        <p>Capiz House: Good for 6-8 Person</p>
        <button onClick={() => window.open('https://www.facebook.com/HappyRipplesBeachResort', '_blank')}>Check Availability</button>
        </div>

        <div className="itemRoom itemTop">
        <img src={Villa} />
        <p>Villa Type: Good for 3-4 Person </p>
        <button onClick={() => window.open('https://www.facebook.com/HappyRipplesBeachResort', '_blank')}>Check Availability</button>
        </div>
        
        <div className="itemRoom itemBottom">
        <img src={Deluxe}/>
        <p>Deluxe Room: Good for 3-4 Person</p>
        <button onClick={() => window.open('https://www.facebook.com/HappyRipplesBeachResort', '_blank')}>Check Availability</button>
        </div>

        <div className="itemRoom itemBottom">
        <img src={Studio} />
        <p>Studio Type: Good for 2-3 Person</p>
        <button onClick={() => window.open('https://www.facebook.com/HappyRipplesBeachResort', '_blank')}>Check Availability</button>
        </div>


    </div>



    </div>
    
    
    </>
  )
}

export default Rooms