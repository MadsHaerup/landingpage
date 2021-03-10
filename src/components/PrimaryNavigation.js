import './PrimaryNavigation.scss';
import React from 'react'

export default function PrimaryNavigation() {
  return (
    <nav className="primaryNavigation">
      <a href="/" className="primaryNavigation__brand">SaaS Company</a>
      <ul className="primaryNavigation__menu">
        <li className="primaryNavigation__menuItem">
          <a className="primaryNavigation__menuLink" href="/home">home</a>
        </li>
        <li className="primaryNavigation__menuItem">
          <a className="primaryNavigation__menuLink" href="/about">about</a>
        </li>
        <li className="primaryNavigation__menuItem">
          <a className="primaryNavigation__menuLink" href="/contact">contact</a>
        </li>
      </ul>
    </nav>
  )
}
