import { FaMapMarkerAlt } from "react-icons/fa";
import React from 'react';

export default function Entry(props) {
  console.log(props)
    return (
      <article className = "journal-entry">
        <div className = "main-image-container">
            <img className = "main-image" src={props.img.src} alt={props.img.alt} />
        </div>
        <div className="info-container">
            <FaMapMarkerAlt className="icon-marker" />
            <span className = "country">{props.country}</span>
            <a href={props.googleMapLink} >View on Goole Map</a>
            <h2 className="entry-title">{props.title}</h2>
            <p className="trip-day">{props.date}</p>
            <p className="entry-text">{props.text}</p>
        </div>
      </article>
      
    );
  }