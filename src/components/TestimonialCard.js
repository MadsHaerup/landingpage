import './TestimonialCard.scss';
import React from 'react'

export default function TestimonialCard({image, copy}) {
  return (
    <article className="testimonialCard">
      <img className="testimonialCard__image" src={image} alt=""/>
      <p className="testimonialCard__copy">{copy}</p>
    </article>
  )
}
