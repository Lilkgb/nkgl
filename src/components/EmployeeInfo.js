import React from 'react';

function EmployeeInfo(props){

    console.log(props)

    return (
        <div className="container">
            <div className="insideContainer">
                <button onClick={props.closeEmployeeInfoComponent}>Close</button>
                <h1>employee info</h1>
            </div>
        </div>
    )
}

export default EmployeeInfo;