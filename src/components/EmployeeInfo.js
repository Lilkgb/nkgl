import React from 'react';

function EmployeeInfo(props){

    console.log(props)

    let employee = props.currentEmployee;

    return (
        <div className="container">
            <div className="insideContainer">
                <button onClick={props.closeEmployeeInfoComponent}>Close</button>
                <h1>{employee.name}</h1>
            </div>
        </div>
    )
}

export default EmployeeInfo;