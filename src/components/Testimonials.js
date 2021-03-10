import './Testimonials.scss';

import React from 'react'
import TestimonialCard from './TestimonialCard';

export default function Testimonials() {
  return (
    <section className="testimonials">
      <TestimonialCard
      image="https://picsum.photos/200/200?random=4"
      copy="Sass is exactly what our business has been lacking. We were treated like royalty. It fits our needs perfectly. Sass was the best investment I ever made.
      - Lilia O."
      />
      <TestimonialCard
      image="https://picsum.photos/200/200?random=2"
      copy="Since I invested in sass I made over 100,000 dollars profits. No matter where you go, sass is the coolest, most happening thing around! I could probably go into sales for you. You won't regret it."
      />
      <TestimonialCard
      image="https://picsum.photos/200/200?random=3"
      copy="Thanks sass! Absolutely wonderful! I am so pleased with this product. I have gotten at least 50 times the value from sass."
      />
    </section>
  )
}
