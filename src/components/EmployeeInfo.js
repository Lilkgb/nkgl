import React, {useState} from 'react';

function EmployeeInfo(props){

    console.log(props)
    let employee = props.currentEmployee;
    let socialDisplay;
    
    const [status, setStatus] = useState(employee.status);
    const [seeSocial, setSeeSocial] = useState(false);

    if(seeSocial){
        socialDisplay = <div>
            <p>{atob(decodeURIComponent(employee.social))}</p>
            <p onClick={() => setSeeSocial(false)} className="socialCheck">Close</p>
        </div>
    } else {
        socialDisplay = <div>
            <p>{employee.social}</p>
            <p>To view full social please <span onClick={() => setSeeSocial(true)} className="socialCheck">Click Here</span></p>
        </div>
    }

    return (
        <div className="container">
            <div className="insideContainer">
                <div className="nameAndImg">
                    <img className="profileImg" src={employee.profileImg}/>
                    <h1>{employee.name}</h1>
                </div>
                <div className="employeeInfoTop">
                    <button>Edit</button>
                    <h3 className={employee.status}>{employee.status}</h3>
                    <button onClick={props.closeEmployeeInfoComponent}>Close</button>
                </div>
                <div>
                    <div>
                        <h3 className="title">Phone Number</h3>
                        <p>{employee.phoneNumber}</p>
                    </div>
                    <div>
                        <h3 className="title">Personal Email</h3>
                        <p>{employee.personalEmail}</p>
                    </div>
                    <div>
                        <h3 className="title">Work Email</h3>
                        <p>{employee.workEmail}</p>
                    </div>
                    <div>
                        <h3 className="title">Address</h3>
                        <p>{employee.address}</p>
                        <p>{employee.apt}</p>
                        <p>{employee.state}</p>
                        <p>{employee.zipCode}</p>
                    </div>
                    <div>
                        <h3 className="title">Birthday</h3>
                        <p>{employee.dob}</p>
                    </div>
                    <div>
                        <h3 className="title">Social Security</h3>
                        {socialDisplay}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeInfo;