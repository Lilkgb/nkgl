import React, {useState} from 'react';

function EmployeeInfo(props){

    console.log(props)
    let employee = props.currentEmployee;
    
    const [status, setStatus] = useState(employee.status);

    return (
        <div className="container">
            <div className="insideContainer">
                <h1>{employee.name}</h1>
                <div className="employeeInfoTop">
                    <button>Edit</button>
                    <h3 className={employee.status}>{employee.status}</h3>
                    <button onClick={props.closeEmployeeInfoComponent}>Close</button>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default EmployeeInfo;