import React, {useState} from 'react';
import AddEmployee from './AddEmployee';
import EmployeeInfo from './EmployeeInfo';
import {connect} from 'react-redux';

function Employees(props){

    let newEmployeeForm;
    let employeeInfo;

    const [status, setStatus] = useState("all");
    const [name, setName] = useState("");
    const [addNewEmployee, setNewEmployee] = useState(false)
    const [employeeInfoComponent, setEmployeeInfoComponent] = useState({state: false, currentEmployee: null});

    if(addNewEmployee === false){
        newEmployeeForm = <div><button onClick={() => setNewEmployee(true)}>Add New Employee</button></div>;
    } else if(addNewEmployee === true){
        newEmployeeForm = <AddEmployee closeEmployeeFormComponent={() => setNewEmployee(false)}/>
    }

    if(employeeInfoComponent.state === false){
        employeeInfo = null;
    } else if(employeeInfoComponent.state === true){
        employeeInfo = <EmployeeInfo closeEmployeeInfoComponent={() => setEmployeeInfoComponent({state: false, currentEmployee: null})} currentEmployee={employeeInfoComponent.currentEmployee}/>
    }

    let displayEmployees;

    if(props.allEmployees){
        displayEmployees = Object.keys(props.allEmployees).map((employee) => {
            let individual = props.allEmployees[employee];
            let lowercaseName = individual.name.toLowerCase();
            let normalReturn = <div key={employee} className="employeeList">
                <h1 onClick={() => setEmployeeInfoComponent({state: true, currentEmployee: individual})}>{individual.name}</h1>
                <p className={individual.status}>{individual.status}</p></div>;
            if(lowercaseName.includes(name.toLowerCase())){
                if(status === "all"){
                    return normalReturn
                } else if(lowercaseName.includes(name.toLowerCase()) && individual.status === status){
                    return normalReturn
                }
            }
        })
    } else {
        displayEmployees = <h1>Loading...</h1>
    }

    return(
        <div className='emContainer'>
            {newEmployeeForm}
            {employeeInfo}
            <h1>Employees!</h1>
            <h2>Add new employee</h2>
            <input
                className="findEmployee"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder = "Find Employee"
            />
            <select id="status" value={status} onChange={e => setStatus(e.target.value)}>
                <option value="all">All</option>
                <option value="Active">Active</option>
                <option value="In Progress">In Progress</option>
                <option value="In Training">In Training</option>
                <option value="Quit/Terminated">Quit/Terminated</option>
            </select>
            {displayEmployees}
        </div>
    )
}

const mapStateToProps = state => ({
    allEmployees: state.employeesState
  })

export default connect(mapStateToProps)(Employees);