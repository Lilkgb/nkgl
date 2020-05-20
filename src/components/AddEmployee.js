import React, {useState} from 'react';
import InputMask from "react-input-mask";
import * as firebase from 'firebase';
import {v4} from 'uuid';

function AddEmployee(props){

    const [name, setName] = useState("");
    const [hireDate, setHireDate] = useState("");
    const [social1, setSocial1] = useState("");
    const [social2, setSocial2] = useState("");
    const [personalEmail, setPersonalEmail] = useState("");
    const [workEmail, setWorkEmail] = useState("");
    const [address, setAddress] = useState("");
    const [apt, setApt] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [dob, setDob] = useState("");
    const [status, setStatus] = useState("Active")
    const [error, setError] = useState()

    function addEmployeeFunction(e){
        e.preventDefault();
        if(social1 !== social2){
            return setError("Socials do not match. Please Check!")
        } else if(hireDate === ""){
            setError("Check hire date!")
        } else if(personalEmail === ""){
            setError("Please check Personal Email")
        } else if(workEmail === ""){
            setWorkEmail("none@none.com")
        } else if(address === ""){
            setError("Please check address")
        } else if(state === ""){
            setError("Please check state")
        } else if(zip === ""){
            setError("Please check Zip Code")
        } else if(phoneNumber === ""){
            setError("Please Check Phone Number")
        } else if(apt === ""){
            setApt("null")
        } else if(dob === ""){
            setError("Please Check Birthday")
        } else {
            let employeeId = v4();
            let checker;
            firebase.database().ref(`employees/${employeeId}`).on('value', function(snapshot) {
                checker = snapshot.val();
              });
            if(checker === undefined || checker === null){
                firebase.database().ref(`employees/${employeeId}`).set({name: name, hireDate: hireDate, social: encodeURIComponent(btoa(social1)), personalEmail: personalEmail, workEmail: workEmail, address: address, state: state, zipCode: zip, phoneNumber: phoneNumber, dob: dob, status: status, apt: apt, termDate: "null", docs : {docStatus: true}}).catch(error => {
                    console.log(error)
                })
                setError("New Employee has been successfully added")
            } else {
                setError(`An employee with the current user ID is already assigned. Please click confirm to set new ID.`)
            }
        }
    }

    return (
        <div className="container">
            <div className="insideContainer">
                <button onClick={props.closeEmployeeFormComponent}>Close</button>
                <h1>Add new employee</h1>
                <form onSubmit={addEmployeeFunction}>
                    <input 
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder = "Employee Full Name"
                    />
                    <InputMask mask ="99/99/9999"
                    value={hireDate}
                    onChange={e => setHireDate(e.target.value)}
                    placeholder = "Hire Date"
                    />
                    <InputMask mask="999-99-9999" value={social1} onChange={e => setSocial1(e.target.value)}
                    placeholder = "Social Security"/>
                    <InputMask mask="999-99-9999" value={social2} onChange={e => setSocial2(e.target.value)}
                    placeholder = "Social Security"/>
                    <input 
                    type="email"
                    value={personalEmail}
                    onChange={e => setPersonalEmail(e.target.value)}
                    placeholder = "Personal Email"
                    />
                    <input 
                    type="email"
                    value={workEmail}
                    onChange={e => setWorkEmail(e.target.value)}
                    placeholder = "Work Email"
                    />
                    <input 
                    type="text"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    placeholder = "Address"
                    />
                    <input 
                    type="text"
                    value={apt}
                    onChange={e => setApt(e.target.value)}
                    placeholder = "Apt?"
                    />
                    <input 
                    type="text"
                    value={state}
                    onChange={e => setState(e.target.value)}
                    placeholder = "State"
                    />
                    <input 
                    type="text"
                    value={zip}
                    onChange={e => setZip(e.target.value)}
                    placeholder = "Zip Code"
                    />
                    <InputMask mask="(999)999-9999" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder="Phone Number"/>
                    <InputMask mask="99/99/9999" value={dob} onChange={e => setDob(e.target.value)} placeholder="Date of Birth"/>
                    <label for="status">Current Status:</label>
                    <select id="status" value={status} onChange={e => setStatus(e.target.value)}>
                        <option value="In Training">In Training</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Active">Active</option>
                    </select>
                    <button type="submit">Confirm</button>
                    {error}
                </form>
            </div>
        </div>
    )
}

export default AddEmployee;