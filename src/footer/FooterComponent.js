import React from 'react'
import { path } from '../path'

export const FooterComponent = () => {
   return (
      <footer className="footer-container">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <img src={`${path}/assets/images/03-logos-gov.png`} alt="Logos" className="footer-logos img-fluid mx-auto d-block" />
               </div>
            </div>
         </div>
         
      </footer>
   )
}
