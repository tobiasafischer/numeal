import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ROUTES from './routes'
import App from '../../App'
import Signup from '../Signup'
import Home from '../Home/Home'

const AppRoutes: React.FC = () => {
   return (
      <Routes>
         {/* <Route path={ROUTES.user.login} element={<Login />} />
            <Route path={ROUTES.user.logout} element={<Logout />} /> */}
         <Route path={ROUTES.user.signup} element={<App />} />
         {/* This is a layout route. Wrapping the element in the PrivateRoute component 
            applies the private route restrictions to all the children routes that form 
         from this root route. */}
         <Route element={<App />}>
            <Route path="*" element={<App />} />
         </Route>
      </Routes>
   )
}

/* 
<PrivateRoute>
   <AppLayout />
</PrivateRoute>
*/

export default AppRoutes
