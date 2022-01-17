import React from 'react'
import { Link } from 'react-router-dom'
import { path } from '../path'
import { url } from '../url'


export const HomeComponent = () => {
   return (
      <div className='homeContainer'>
         <div className="row">
            <div className="col-sm-4">
               <img src={`${url}/assets/images/01-5-pasos.jpg`} alt="5 pasos" className="img-fluid logo-pasos" />
            </div>
            <div className="col-sm-8">
               <h2 className="pink ">Introducción</h2>
               <p className="gray justify">
               Los primeros cinco años de vida constituyen un periodo muy sensible en el desarrollo del ser humano, conocido como la primera infancia. Dentro de este tiempo, los primeros 1000 días de vida – contados desde la concepción, pasando por el embarazo hasta cumplir su segundo año – se consideran los más importantes para asegurar un futuro con mejores oportunidades para nuestras niñas y niños. 
               </p>
               <p className="gray justify">
               En este tiempo, en el cerebro se forman más del 80 % d e las conexiones neuronales que una persona tendrá en toda su vida, se desarrollan habilidades fundamentales del lenguaje, la motricidad y el pensamiento simbólico, que le permitirán relacionarse con las personas de su entorno más cercano y adquirir la confianza básica para explorar y conocer el mundo que le rodea. 
               </p>
               <p className="gray justify">
               El amor, el afecto, la estimulación, la nutrición y el ambiente cumplen un rol fundamental en el desarrollo del potencial cognitivo, pues en este periodo se estructuran las bases físicas, psicológicas, sociales y emocionales de los seres humanos. Es por esto que, para las madres, padres y cuidadores, es un desafío el asegurar el cuidado adecuado de las niñas y niños. 
               </p>
               <p className="gray justify">
               Invitamos a que la información y las actividades sugeridas en el libro “Paso a paso por una infancia plena” sean compartidas en familia.
               </p>
               <Link to={`${path}/maternidad-segura`} className="btn btn-green btn-big white mt-4 mb-4 btn-center">EMPEZAR</Link>
            </div>
         </div>
      </div>
   )
}
