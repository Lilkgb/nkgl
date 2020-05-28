import React, {useState} from 'react';
import AddVan from './AddVan';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import '../scss/Vans.scss';

function VanList(props){

    console.log(props)

    let display;
    let displayVans;
    let searchInput;

    const[addVanForm, setAddVanForm] = useState(false);
    const [name, setName] = useState("");
    const [status, setStatus] = useState("all");
    const [search, setSearch] = useState("name")
    const [vin, setVin] = useState("");

    if(addVanForm){
        display = <AddVan closeVanFormComponent={() => setAddVanForm(false)}/>
    } else {
        display = null;
    }

    if(props.allVans){
        displayVans = Object.keys(props.allVans).map((van) => {
            let individual = props.allVans[van];
            let lowercaseName = individual.name.toLowerCase();
            let lowercaseVin = individual.vin.toLowerCase();
            let normalReturn = <div key={van} className="employeeList">
                <Link to={`/van/${individual.vanId}`}><h1>{individual.name}</h1></Link>
                <p>{individual.vin}</p>
                <p className={individual.status}>{individual.status}</p></div>;
            if(search === "name"){
                if(lowercaseName.includes(name.toLowerCase())){
                    if(status === "all"){
                        return normalReturn
                    } else if(lowercaseName.includes(name.toLowerCase()) && individual.status === status){
                        return normalReturn
                    }
                }
            } else if(search === "vin"){
                if(lowercaseVin.includes(vin.toLowerCase())){
                    if(status === "all"){
                        return normalReturn
                    } else if(lowercaseName.includes(name.toLowerCase()) && individual.status === status){
                        return normalReturn
                    }
                }
            }
        })
    } else {
        displayVans = <h1>Loading...</h1>
    }

    if(search === "name"){
        searchInput = <input
        className="findEmployee"
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder = "Find Van"
    />
    } else {
        searchInput = <input
        className="findEmployee"
        type="text"
        value={vin}
        onChange={e => setVin(e.target.value)}
        placeholder = "Find Vin"
    />
    }

    return(
        <div>
            {display}
            <h1>Van List</h1>
            <button onClick={() => setAddVanForm(true)}>Add New Van</button>
            <br/>
            <br/>
            <label>Search By: </label>
            <select id="status" value={search} onChange={e => setSearch(e.target.value)}>
                <option value="name">Name</option>
                <option value="vin">vin</option>
            </select>
            <br/>
            <label>Find: </label>
            {searchInput}
            <select id="status" value={status} onChange={e => setStatus(e.target.value)}>
                <option value="all">All</option>
                <option value="Active">Active</option>
                <option value="Rental">Rental</option>
                <option value="Body Shop">Body Shop</option>
                <option value="Oil Change">Oil Change</option>
                <option value="Offboarded">Offboarded</option>
            </select>
            {displayVans}
        </div>
    )
}

const mapStateToProps = state => ({
    allVans: state.vanState
  })

export default connect(mapStateToProps)(VanList);