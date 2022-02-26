import React from 'react'
import Corousel from '../corousel/corouselUi'
import Footer from '../footer/footer'
import Multicorousel from '../corousel/multiplecardcorousel'
import Premier from '../corousel/premier'
import Middlebanner from '../middlebanner/middlebanner'
import "./Landing.css"

const Landing = () => {
    return (
        <>
            <div className='landing'>            
            <Corousel/>
            <div className='Recomended-movies'>
                <h2>
                    Recomended Movies
                </h2>
                <Multicorousel/>
            </div>
            <Middlebanner/>
            <div className='the-best-of-the-entertainment'>
                <h2>
                    The best of the entertainment
                </h2>
                <Multicorousel/>
            </div>

                <div className='premier'>
                    <Premier/>
                </div>

                <div className="food">
                    <h2>
                        Food
                    </h2>
                    <Multicorousel/>
                </div>

                <div className='latest-plays'>
                  <h2>
                    online streaming events
                  </h2>
                  <Multicorousel/>
                </div>

                <div className="outdoor-events">
                  <h2>Outdoor events</h2>
                  <Multicorousel/>
                </div>

            <div className='landing-footer'>
              <Footer/>
            </div>
            </div>
        </>

    )
}

export default Landing
