import React, {useState} from 'react';
import {v4} from 'uuid';
import * as firebase from 'firebase';
import InputMask from "react-input-mask";

function AddVan(props){
    const [name, setName] = useState("");
    const [retrieveDate, setRetrieveDate] = useState("");
    const [vin, setVin] = useState("");
    const [status, setStatus] = useState("Active")
    const [error, setError] = useState()

    function addEmployeeFunction(e){
        e.preventDefault();
        if(retrieveDate === ""){
            setError("Check retrieve date!")
        } else if(vin === ""){
            setError("Check Vin number")
        } else {
            let vanId = v4();
            let checker;
            firebase.database().ref(`vanList/${vanId}`).on('value', function(snapshot) {
                checker = snapshot.val();
              });
            if(checker === undefined || checker === null){
                firebase.database().ref(`vanList/${vanId}`).set({name: name, vanId: vanId, retrieveDate: retrieveDate, status: status, termDate: "null", docs : {docStatus: true}}).catch(error => {
                    console.log(error)
                })
                setError("New van has been successfully added")
            } else {
                setError(`An van with the current ID is already assigned. Please click confirm to set new ID.`)
            }
        }
    }

    return (
        <div className="container">
            <div className="insideContainer">
                <button onClick={props.closeVanFormComponent} className="cancel">Close</button>
                <h1>Add new employee</h1>
                <form onSubmit={addEmployeeFunction}>
                    <input 
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder = "Van Name"
                    />
                    <InputMask mask ="99/99/9999"
                    value={retrieveDate}
                    onChange={e => setRetrieveDate(e.target.value)}
                    placeholder = "Retrieve Date"
                    />
                    <input 
                    type="text"
                    value={vin}
                    onChange={e => setVin(e.target.value)}
                    placeholder = "Vin"
                    />
                    <label for="status">Current Status:</label>
                    <select id="status" value={status} onChange={e => setStatus(e.target.value)}>
                        <option value="Oil Change">Oil Change</option>
                        <option value="Body Shop">Body Shop</option>
                        <option value="Active">Active</option>
                    </select>
                    <button type="submit">Confirm</button>
                    {error}
                </form>
            </div>
        </div>
    )
}

export default AddVan;