import React, {useState} from 'react';
import AddEmployeeImage from './AddEmployeeImage';
import * as firebase from 'firebase';
import {connect} from 'react-redux';

function EmployeeInfo(props){

    console.log(props)

    let employee;
    let display;
    let employeeImageUpload;
    let docView;
    
    
    const [seeSocial, setSeeSocial] = useState(false);
    const [uploadEmployeeImage, setUploadEmployeeImage] = useState(false);
    const [img, setImg] = useState("");
    const [documents, setDocuments] = useState("info");
    const [information, setInformationState ] = useState("information");

    for(let i=0; i < props.allEmployees.length; i++){
        if(props.allEmployees[i].employeeId === props.match.params.id){
            employee = props.allEmployees[i]
        }
    }

    function goBack(){
        props.history.push(`/employees`);
    }

    firebase.database().ref(`employees/${props.match.params.id}`).on("value", (snapshot) => {
        let info = snapshot.val();
        if(img !== info.profileImg){
            setImg(info.profileImg)
        }
    })

    function nextEmployee(){
        for(let i=0; i < props.allEmployees.length; i++){
            if(props.allEmployees[i].employeeId === props.match.params.id){
                if(props.allEmployees[i + 1] === undefined || props.allEmployees[i + 1] === null){
                    props.history.push(`/employee/${props.allEmployees[0].employeeId}`)
                } else {
                    props.history.push(`/employee/${props.allEmployees[i + 1].employeeId}`)
                }
            }
        }
    }

    function prevEmployee(){
        for(let i=0; i < props.allEmployees.length; i++){
            if(props.allEmployees[i].employeeId === props.match.params.id){
                if(props.allEmployees[i - 1] === undefined || props.allEmployees[i - 1] === null){
                    let num = props.allEmployees.length -1;
                    props.history.push(`/employee/${props.allEmployees[num].employeeId}`)
                } else {
                    props.history.push(`/employee/${props.allEmployees[i - 1].employeeId}`)
                }
            }
        }
    }

    if(employee){
        display = <div className="nextBackContainer">
            <div className="nextBack">
                <button onClick={prevEmployee}> Back </button>
                <h1>{employee.name}</h1>
                <button onClick={nextEmployee}> Next </button>
            </div>
        </div>
        if(documents === "info"){
            docView = <div className="docContainer">
            <div className="employeeInfoTop">
                <button>Edit</button>
                <h3 className={employee.status}>{employee.status}</h3>
                <button className="cancel" onClick={props.closeEmployeeInfoComponent}>Close</button>
            </div>
            <div className="nameAndImg">
                <div className="profileImg">
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
                </div>
            </div>
        </div>
        } else if(documents === "documents"){
            docView = <div className="docContainer">
                <h1>documents</h1>
            </div>
        }
    } else {
        display = <h1>Loading . . .</h1>
    }

    if(uploadEmployeeImage){
        employeeImageUpload = <AddEmployeeImage employee={employee} closeAddImage={() => setUploadEmployeeImage(false)}/>
    } else {
        employeeImageUpload = null;
    }

    return (
        <div>
            {employeeImageUpload}
            <button className="goBack" onClick={goBack}>Go Back</button>
            {display}
            <div className={`docHeader`}>
                <button className={`${information==="information" ? "teal" : ""}`} onClick={() => {setDocuments("info"); setInformationState("information");}}>Information</button>
                <button className={`${information==="documents" ? "teal" : ""}`} onClick={() => {setDocuments("documents"); setInformationState("documents");}}>Documents</button>
            </div>
            {docView}
        </div>
    )
}

const mapStateToProps = state => ({
    allEmployees: state.employeesState
  })

export default connect(mapStateToProps)(EmployeeInfo);