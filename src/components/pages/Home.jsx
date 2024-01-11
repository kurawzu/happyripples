import React from 'react'
import './Home.css'
import Beach from './mediapage/beaches2.jpg'
import hapimob from './mediapage/hapimob.png'

const Home = ( { scrollToSection } ) => {
  return (
    <>
          <div className="logocon"> <img src={hapimob} /> </div>

        <div className="Home">
            <img src={Beach} />
            <div className="text">
            <h1>HAPPY RIPPLES</h1>
            <h2>Beach Resort</h2>
            </div>
        </div>


        <div className="Homebut">
  <button onClick={() => window.open('https://www.booking.com/hotel/ph/happy-ripples-beach-resort.html?aid=339463&label=msn-jP1B93klLpZH9X_twjB_fQ-16811531144%3Atikwd-138126930041%3Aloc-149%3Aneo%3Amte%3Alp142765%3Adec%3Aqshappy%20ripples%20beach%20resort&sid=4e8af0ffedd1699bd995bbdb775302d7&dest_id=-2434905;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1704950842;srpvid=0f3b2659a58d0120;type=total;ucfs=1&#hotelTmpl', '_blank')}>
    BOOK NOW
  </button>
  <button onClick={() => scrollToSection('amen')}>
    AMENITIES
  </button>
</div>

        

    
    </>
  )
}

export default Home