import React, {useState} from 'react';
import AddVan from './AddVan';

function VanList(){

    let display;

    const[addVanForm, setAddVanForm] = useState(false);

    if(addVanForm){
        display = <AddVan closeVanFormComponent={() => setAddVanForm(false)}/>
    } else {
        display = null;
    }

    return(
        <div>
            {display}
            <h1>Van List</h1>
            <button onClick={() => setAddVanForm(true)}>Add New Van</button>
        </div>
    )
}

export default VanList;