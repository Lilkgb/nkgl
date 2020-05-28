import React, {useState} from 'react';
import moment from 'moment';
import AddVanMedia from './AddVanMedia';

function VanDamage(props){

    console.log(props)

    let damages;
    let damageForm;

    const [addDamageForm, setAddDamageForm] = useState(true);

    if(props.van.damages){
        if(props.van.damages.damagesStatus){
            damages = Object.keys(props.van.damages).map((damages) => {
                let damage = props.van.damages[damages];
                if(damage !== true){
                    return <div key={damages}>
                        <img src={damage.media}/>
                        <h3>Date: {moment(damage.date).format("MMM Do YYYY")}</h3>
                        <p>{damage.description}</p>
                    </div>
                }
            })
        } else {
            damages = <h1>No Damage have been reported yet.</h1>
        }
    } else {
        damages = <h1>Loading . . .</h1>
    }

    if(addDamageForm.state){
        damageForm = <AddVanMedia closeAddDamage={() => setAddDamageForm(false)} van={props.van}/>
    } else {
        damageForm = null;
    }
    return(
        <div className="damageForm">
            {damageForm}
            <button className="addDamageButton" onClick={() => setAddDamageForm({state: true, info: null})}>Add Damage</button>
            <h1>Damages</h1>
            {damages}
        </div>
    )
}

export default VanDamage;