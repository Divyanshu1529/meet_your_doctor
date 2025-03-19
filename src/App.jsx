import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctor from './pages/doctor'
import Login from './pages/login'
import Myprofile from './pages/myProfile'
import Contect from './pages/contect'
import About from './pages/about'
import Appointment from './pages/appointment'
import My_appointment from './pages/my-appointment'
import Navbar from './components/Navbar'
import Footer from './components/footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
     <Navbar />
     <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/doctor' element={<Doctor/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/myprofile' element={<Myprofile/>}/>
    <Route path='/contect' element={<Contect/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/doctor/:speciality' element={<Doctor/>}/>
    <Route path='/appointment' element={<Appointment/>}/>
    <Route path='/my_appointment' element={<My_appointment/>}/>
    <Route path='/appointment/:docId' element={<Appointment/>}/>
     </Routes>
     <Footer/>
    </div>
  )
}

export default App