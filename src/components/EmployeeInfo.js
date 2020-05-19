import React from 'react';

function EmployeeInfo(props){

    console.log(props)
    
    return (
        <div>
            <button onClick={props.closeEmployeeInfoComponent}>Close</button>
            <h1>employee info</h1>
        </div>
    )
}

export default EmployeeInfo;