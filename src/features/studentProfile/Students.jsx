import React from 'react';
import { useSelector } from 'react-redux';
import StudentsTable from './StudentsTable';
import { Link } from 'react-router-dom';

const Students = () => {

    const data = useSelector((state) => state.student)

    return (
        <div className='students-page'>
            <div className="student-page-header">
                <div className='details-heading'>
                    Student Details
                </div>

                <div>
                    <Link to="/students-desc"><button className='add-btn'>Add new student</button></Link>
                </div>
            </div>

            <div>
                {data.studentArray.length ? <StudentsTable/> : <h3>No data are there u need to click on add new student button to add details.</h3>}
            </div>
        </div>
    )
}

export default Students