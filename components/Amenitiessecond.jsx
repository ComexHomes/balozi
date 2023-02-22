import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Amenitiessecond() {

  useEffect(() => {
    AOS.init({duration:1500})
  })

  return (
    <div data-aos='fade-up' className='amenities-second'>
        <div className="amenities-first-heading">
            <h3>ENIGMATIC</h3>
            <h2>ARCHITECTURE</h2>
            
        </div>
        <div className="amenities-first-text">
            <p>A place where opulence, timeless elegance and classic beauty effortlessly blend.  Balozi Suites, is a once-in-a-lifetime modern apartment that epitomizes the very best in lifestyle, location and luxury. Perched on the highly desirable South B Area overlooking the great Nairobi Express Way, CBD Skyline, Nairobi National Park Mombasa road and Southern Bypass.

Capturing sparkling interior and exterior views from all rooms within this luxurious residence, this enviable one-bedroom and studio apartment has the highly sought-after investment opportunity that guarantees investors maximum returns on their investment.

Further adding to the undeniable luxury is a rooftop pool, fully equipped rooftop chill spot, fine dine restaurant and internal access to health and fitness club.
</p>
        </div>
    </div>
  )
}

export default Amenitiessecond