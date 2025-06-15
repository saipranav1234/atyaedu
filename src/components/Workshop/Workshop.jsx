import React from 'react'
import workshop from './iott.webp'
import './Workshop.css'

const Workshop = () => {
  return (
    <>
    <h2 className="work-sml">conducting</h2>
    <h1 className="work-main">
            Workshops
        </h1>
     
    <div className='workshop'>
         
        <div className="workshop-left">
            <h1 className="work-h">
                Practical Learning ..
            </h1>
            <h2 className="work-h2">
                Let's Innovate
            </h2>
            <p className="work-p">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea excepturi praesentium blanditiis doloremque dolorem qui repellendus nobis dicta odio illo quis nihil asperiores, ratione, saepe vel. Eum tempora obcaecati cupiditate!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eaque incidunt veniam eum cumque libero magnam dolore. Iste facilis laborum esse repellat, enim eveniet! Sequi sit facilis pariatur error hic.

            </p>
            <button className="work-btn">Get Ready !</button>

        </div>
        <div className="workshop-right">
            <img src={workshop} alt="" className="workshop-img" />
        </div>
    </div>
    </>
  )
}

export default Workshop