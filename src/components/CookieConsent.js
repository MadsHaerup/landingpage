import './CookieConsent.scss';

import React from 'react'

export default function CookieConsent() {
  return (
    <div className="overlay">
      <section className="cookieConsentModal">
        <header className="cookieConsentModal__header">
          <h1>Hvad bruger vi cookies til?</h1>
        </header>

        <article className="cookieConsentModal__content">
          <table>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" id="cookie__necessary" disabled checked/>
                  <label htmlFor="cookie__necessary" className="consentToggle" />
                </td>
                <td>
                  <p>Tillad alle nødvendige cookies.
                  Dette er cookies som er nødvendige
                  for at denne hjemmeside virker korrekt.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" id="cookie__analytics"/>
                  <label htmlFor="cookie__analytics" className="consentToggle" />
                </td>
                <td>
                  <p>Tillad analytics.
                  Vi bruger tredjepartcookies fra Google
                  til at sporre og lave statistik over vores besøgende</p>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="content__buttons">
            <button className="buttons__button">Tillad valgte</button>
            <button className="buttons__button buttons__button--highlight">Tillad alle</button>
          </div>
        </article>
      </section>
      
    </div>
  )
}
