import React from 'react';
import HomePage from '../features/home/HomePage';
import StudentsPage from '../features/studentProfile/StudentsPage';
import ContactUs from '../features/contactUs/ContactUs';
import StudentInfoEditPage from '../features/studentProfile/StudentInfoEditPage';
import { Routes, Route } from 'react-router-dom';

const NavigationRouters = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>  
            <Route path="/students" element={<StudentsPage/>}/>
            <Route path="/contact-us" element={<ContactUs/>}/>
            <Route path="/students-desc" element={<StudentInfoEditPage/>}/>
            <Route path="/students-desc/:id" element={<StudentInfoEditPage/>}/>
        </Routes>
    )
}

export default NavigationRouters;