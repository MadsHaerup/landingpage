import './PlanCard.scss';

import React from 'react'

export default function PlanCard({heading, summary, price, link, features,getfrom}) {
  return (
    <article className="planCard">
      <section className="planCard__title">
        <h1 className="title__heading">{heading}</h1>
        <p className="title__summary">{summary}</p>
        <p className="title__price">{price}</p>
        <p className="title__conditions">/user/month*<br/>(billed annually)</p>
        <a className="title__link" href={link}>Try for <span className="title__link--caps">free</span> &gt;</a>
      </section>

      <section className="planCard_features">
        {getfrom ? <>
        <p className="features__getfrom">Get all {getfrom} features</p><h2 className="features__heading">plus</h2></>
        : <h2 className="features__heading">Features</h2> }
        <ul className="features__list">
          {features.map(feature =><li className="list__item">{feature}</li>)}
        </ul>
      </section>
    </article>
  )
}
