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
import { path } from '../path';


export const DashboardRoutes = () => {
   return (
      <div>
         <HeaderComponent/>
         <Router>
            <div className="container mt-4">
               <Routes>
                  <Route path={`${path}/`} element={<HomeComponent/>}/>
                  <Route path={`${path}/maternidad-segura`} element={<NavComponent/>}/>
                  <Route path='*' element={<Navigate  to={`/${path}`}/>}/>
               </Routes>
            </div>
         </Router>
         <FooterComponent/>
      </div>
   )
}
