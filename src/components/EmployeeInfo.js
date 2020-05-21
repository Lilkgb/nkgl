import React, {useState} from 'react';
import AddEmployeeImage from './AddEmployeeImage';
import * as firebase from 'firebase';

function EmployeeInfo(props){

    let employee = props.currentEmployee;
    let socialDisplay;
    let employeeImageUpload;
    
    const [status, setStatus] = useState(employee.status);
    const [seeSocial, setSeeSocial] = useState(false);
    const [uploadEmployeeImage, setUploadEmployeeImage] = useState(false);
    const [img, setImg] = useState(employee.profileImg);

    firebase.database().ref(`employees/${props.currentEmployee.employeeId}`).on("value", (snapshot) => {
        let info = snapshot.val();
        if(img !== info.profileImg){
            setImg(info.profileImg)
        }
    })

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

    if(uploadEmployeeImage){
        employeeImageUpload = <AddEmployeeImage employee={employee} closeAddImage={() => setUploadEmployeeImage(false)}/>
    } else {
        employeeImageUpload = null;
    }

    return (
        <div className="container">
            {employeeImageUpload}
            <div className="insideContainer">
                <div className="employeeInfoTop">
                    <button>Edit</button>
                    <h3 className={employee.status}>{employee.status}</h3>
                    <button className="cancel" onClick={props.closeEmployeeInfoComponent}>Close</button>
                </div>
                <div className="nameAndImg">
                    <div class="profileImg">
                        <img src={img} alt=""/>
                        <div className="update">
                            <p onClick={() => setUploadEmployeeImage(true)}>Update</p>
                        </div>
                    </div>
                    <h1>{employee.name}</h1>
                </div>
                <hr />
                <div>
                    <div>
                        <h3 className="title">Phone Number</h3>
                        <a href={"tel: " + employee.phoneNumber}>{employee.phoneNumber}</a>
                    </div>
                    <div>
                        <h3 className="title">Personal Email</h3>
                        <a href={"mailto: " + employee.personalEmail}>{employee.personalEmail}</a>
                    </div>
                    <div>
                        <h3 className="title">Work Email</h3>
                        <a href={"mailto: " + employee.workEmail}>{employee.workEmail}</a>
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