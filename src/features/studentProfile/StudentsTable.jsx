import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const StudentsTable = () => {
    const data = useSelector((state) => state.student);

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                        <th>Change</th>
                    </tr>
                    {data.studentArray.map((x,i) => 
                        <tr key={i}>
                            <td>{x.name}</td>
                            <td>{x.age}</td>
                            <td>{x.course}</td>
                            <td>{x.batch}</td>
                            <td><Link to={`/students-desc/${i + 1}`} state={{details: x, id: i}}>Edit</Link></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default StudentsTable