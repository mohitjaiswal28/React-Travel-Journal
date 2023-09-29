
import React from 'react'
import Header from './components/Header'
import Place from './components/Place'
import placeData from './placeData';
import './App.css';

export default function App() {

  const placeItem = placeData.map((item) => {
    return <Place 
            key = {item.id}
            title = {item.title}
            loc = {item.location}
            googlemap = {item.googleMapUrl}
            desc = {item.desc}
            imgsrc = {item.imgUrl}
          />
  })
  
  return(
    <>
      <div className='booklet'>
        <section id="header">
          <Header />
        </section>

        <section className="place">
          {placeItem}
        </section>
      </div>
    </>
  )
}
