import React from 'react';
import HomePage from '../features/home/HomePage';
import Students from '../features/studentProfile/Students';
import ContactUs from '../features/contactUs/ContactUs';
import StudentEdit from '../features/studentProfile/StudentEdit';
import { Routes, Route } from 'react-router-dom';
import StudentsTable from '../features/studentProfile/StudentsTable';

const Nav = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>  
            <Route path="/students" element={<Students/>}/>
            <Route path="/contact-us" element={<ContactUs/>}/>
            <Route path="/students-desc" element={<StudentEdit/>}/>
            <Route path="/students-desc/:id" element={<StudentEdit/>}/>
        </Routes>
    )
}

export default Nav;