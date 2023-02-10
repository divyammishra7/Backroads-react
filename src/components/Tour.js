import React from 'react'
import {tour} from './Pagelinks'

function Tour() {
  return (
    <>
    <section className="section" id="tours">
      <div className="section-title">
        <h2>featured <span>tours</span></h2>
      </div>

      <div className="section-center featured-center">
        {tour.map((info)=>{
          return(
            <article className="tour-card">
            <div className="tour-img-container">
              <img src={info.image} className="tour-img" alt="" />
              <p className="tour-date">august 26th, 2020</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{info.title}</h4>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                vitae tempore voluptatum maxime reprehenderit eum quod
                exercitationem fugit, qui corporis.
              </p>
              <div className="tour-footer">
                <p>
                  <span><i className="fas fa-map"></i></span> china
                </p>
                <p>{info.duration} days</p>
                <p>from {info.cost}</p>
              </div>
            </div>
          </article>
          );

        })}
       

        
      </div>
    </section>
      
    </>
  )
}

export default Tour
