import React, {useState} from 'react';
import '../scss/Employees.scss';
import AddEmployee from './AddEmployee';

function Employees(){

    let employees = {"jwoiennwe0923n":{name: "ryan mClEan", dob: "5/31/95"}, "oiwe09vj3": {name: "mAsOod", dob: "5/4/22"}, "wjeifoaj":{name: "jeff"}, "jwoeifjabwe": {name: "sarah Do"}};

    const captialize = words => words.split(' ').map( w =>  w.substring(0,1).toUpperCase()+ w.substring(1)).join(' ')

    const [name, setName] = useState("");

    return(
        <div className='emContainer'>
            <AddEmployee />
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
                return <div key={employee}><h1>{captialize(lowercaseName)}</h1></div>
                }
            })}</h1>
        </div>
    )
}

export default Employees;