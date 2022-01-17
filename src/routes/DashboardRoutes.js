import React from 'react';
import { 
   Navigate, 
   Routes,
   Route, 
   BrowserRouter as Router, 
    } from 'react-router-dom';
import { FooterComponent } from '../footer/FooterComponent';
import { HeaderComponent } from '../header/HeaderComponent';
import { HomeComponent } from '../home/HomeComponent';
import { NavComponent } from '../nav/NavComponent';
// import { url } from '../url';


export const DashboardRoutes = () => {
   return (
      <div>
         <HeaderComponent/>
         <Router basename='/pasoapaso'>
            <div className="container mt-4">
               <Routes>
                  <Route path={`/`} element={<HomeComponent/>}/>
                  <Route path={`/maternidad-segura`} element={<NavComponent/>}/>
                  <Route url='*' element={<Navigate  to={`/`}/>}/>
               </Routes>
            </div>
         </Router>
         <FooterComponent/>
      </div>
   )
}
