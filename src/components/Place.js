
import React from 'react'

export default function Place(props) {
    return(
        <div className="place">
            <div className="place-image">
                <img src={props.imgsrc} alt="" className="place-img" />
            </div>

            <div className="place-description">
                <div className="box-1">
                    <img src="https://cdn-icons-png.flaticon.com/512/6861/6861547.png" alt="Location" className="icon1" />
                    <p>{props.loc}</p>
                    <p className='link'><a target='_main' href={props.googlemap}>Google Map Url</a></p>
                </div>
                <h1>{props.title}</h1>
                <p className='d'>{props.desc}</p>
            </div>
        </div>
    )
}
