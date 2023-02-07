import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './StudentsPage.css';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { addUser, editUser } from './studentSlice';

const StudentInfoEditPage = () => {
    const navigate = useNavigate();
    const editData = useLocation();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.student)

    const [state, setDetails] = useState(data.studentInfo);

    useEffect(() => {
        if(editData.state !== null) {
            setDetails({
                name: editData.state.details.name,
                age: editData.state.details.age,
                course: editData.state.details.course,
                batch: editData.state.details.batch
            })
        }
    }, [editData])

    const changeHandler = (e) => {
        setDetails({...state,[e.target.name]: e.target.value});
    }

    const submitInfo = () => {
        if(editData.state === null) {
            dispatch(addUser({state}));
            navigate('/students');
        } else {
            let index = editData.state.id;
            dispatch(editUser({state, index}));
            navigate('/students');
        }
    }

    return (
        <div className="add-student-form">
            <div className='upper-form-control'>
                <div class="form-floating">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Enter name" name="name" value={state.name} onChange={changeHandler}/>
                    <label for="floatingInput">Name</label>
                </div>

                <div class="form-floating">
                    <input type="number" class="form-control" id="floatingInput" placeholder="Enter age" name="age" value={state.age} onChange={changeHandler}/>
                    <label for="floatingInput">Age</label>
                </div>
            </div>

            <div className='upper-form-control'>
                <div class="form-floating">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Enter course" name="course" value={state.course} onChange={changeHandler}/>
                    <label for="floatingInput">Course</label>
                </div>

                <div class="form-floating">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Enter batch" name="batch" value={state.batch} onChange={changeHandler}/>
                    <label for="floatingInput">Batch</label>
                </div>
            </div>

            <div className='form-buttons'>
                <Link to="/students" className='cancel-btn'><button className='cancel-btn add-btn'>Cancel</button></Link>
                <button className='add-btn' onClick={submitInfo}>{editData.state === null ? 'Submit' : 'Update'}</button>
            </div>
        </div>
    )
}

export default StudentInfoEditPage