import React, { useEffect, useRef, useState } from 'react';
import { PdfComponent } from '../pdf/PdfComponent';
import { url } from '../url';



export const NavComponent = () => {

   const refToScroll = useRef(null);

   const scrollToElement = () => refToScroll.current.scrollIntoView();

   const [source, setSource] = useState({
      fuente:`${url}/assets/pdf/menu1.pdf`
   });

   const [showPdf, setShowPdf] = useState(false);
   
   const handlePdf = async( link )=>{
      setSource({
         ...fuente,
         fuente:`${url}${link}`
      })

      await setShowPdf( true );

      await scrollToElement();
   }
   const {fuente} = source;
   

   useEffect(() => {
      window.scrollTo(0, 0);      
    }, [])

   return (
      <div className='maternidadContainer'>
         <div className="row">
            <div id="inicio" className="mb-3"></div>
            <div className="col-md-5">
               <h3 className="pink">MENÚ PRINCIPAL</h3>
               <div className="menu-container">
                  <ul>
                     <li>
                        <div className="link-container">
                           <div className="text-container grey">
                              Salud sexual, reproductiva y métodos anticonceptivos
                           </div>
                           <div className="button-container">
                              <button className="orange-bg white btn" onClick={ ()=>handlePdf('/assets/pdf/menu1.pdf') } >IR <img src={`${url}/assets/images/05-right-arrow.png`} alt="5 pasos" className="img-fluid " /></button>
                           </div>
                        </div>
                     </li>
                     <li>
                        <div className="link-container">
                           <div className="text-container grey">
                              Control prenatal
                           </div>
                           <div className="button-container">
                              <button className="orange-bg white btn" onClick={ ()=>handlePdf('/assets/pdf/menu2.pdf') } >IR <img src={`${url}/assets/images/05-right-arrow.png`} alt="5 pasos" className="img-fluid " /></button>
                           </div>
                        </div>
                     </li>
                     <li>
                        <div className="link-container">
                           <div className="text-container grey">
                              Cuidado integral desde el nacimiento hasta los 6 meses
                           </div>
                           <div className="button-container">
                              <button className="orange-bg white btn" onClick={ ()=>handlePdf('/assets/pdf/menu3.pdf') } >IR <img src={`${url}/assets/images/05-right-arrow.png`} alt="5 pasos" className="img-fluid " /></button>
                           </div>
                        </div>
                     </li>
                     <li>
                        <div className="link-container">
                           <div className="text-container grey">
                              Cuidado integral desde los 6 meses hasta los 24 meses
                           </div>
                           <div className="button-container">
                              <button className="orange-bg white btn" onClick={ ()=>handlePdf('/assets/pdf/menu4.pdf') } >IR <img src={`${url}/assets/images/05-right-arrow.png`} alt="5 pasos" className="img-fluid " /></button>
                           </div>
                        </div>
                     </li>
                     <li>
                        <div className="link-container">
                           <div className="text-container grey">
                              Cuidado integral desde los 3 años hasta los 5 años
                           </div>
                           <div className="button-container">
                              <button className="orange-bg white btn" onClick={ ()=>handlePdf('/assets/pdf/menu5.pdf') } >IR <img src={`${url}/assets/images/05-right-arrow.png`} alt="5 pasos" className="img-fluid " /></button>
                           </div>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="col-md-7" >
               <div id="refToScroll" ref={refToScroll}></div>
               <div className={ showPdf ? 'pdfContainer' : 'pdfContainer dNone' } >
                  <PdfComponent source={fuente}/>
                  <a href="#inicio" className="btn pink-bg mb-5 white btn-regresar">Regresar al menu</a>
               </div>
            </div>
         </div>
      </div>
   )
}
