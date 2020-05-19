import React, {useState} from 'react';
import '../scss/Employees.scss';
import AddEmployee from './AddEmployee';
import EmployeeInfo from './EmployeeInfo';

function Employees(){

    let employees = {"jwoiennwe0923n":{name: "Ryan McLean", dob: "5/31/95"}, "oiwe09vj3": {name: "Masood", dob: "5/4/22"}, "wjeifoaj":{name: "Jeff"}, "jwoeifjabwe": {name: "Sarah Do"}};
    let newEmployeeForm;
    let employeeInfo;

    const captialize = words => words.split(' ').map( w =>  w.substring(0,1).toUpperCase()+ w.substring(1)).join(' ')

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

    return(
        <div className='emContainer'>
            {newEmployeeForm}
            {employeeInfo}
            <h1>Employees!</h1>
            <h2>Add new employee</h2>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder = "Find Employee"
            />
            <h1>{Object.keys(employees).map((employee) => {
                let individual = employees[employee];
                let lowercaseName = individual.name.toLowerCase();
                if(lowercaseName.includes(name.toLowerCase())){
                return <div key={employee}><h1 onClick={() => setEmployeeInfoComponent({state: true, currentEmployee: individual})}>{individual.name}</h1></div>
                }
            })}</h1>
        </div>
    )
}

export default Employees;