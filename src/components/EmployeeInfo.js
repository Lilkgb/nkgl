import React, {useState} from 'react';

function EmployeeInfo(props){

    console.log(props)
    let employee = props.currentEmployee;
    
    const [status, setStatus] = useState(employee.status);

    return (
        <div className="container">
            <div className="insideContainer">
                <div>
                    <button>Edit</button>
                    <button onClick={props.closeEmployeeInfoComponent}>Close</button>
                </div>
                <h1>{employee.name}</h1>
                <select id="status" value={status} onChange={e => setStatus(e.target.value)}>
                    <option value="all">All</option>
                    <option value="Active">Active</option>
                    <option value="In Progress">In Progress</option>
                    <option value="In Training">In Training</option>
                    <option value="Quit/Terminated">Quit/Terminated</option>
                </select>
            </div>
        </div>
    )
}

export default EmployeeInfo;