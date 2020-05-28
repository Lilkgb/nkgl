import React, {useState} from 'react';
import moment from 'moment';
import AddVanMedia from './AddVanMedia';
import VanMedia from './VanMedia';

function VanDamage(props){

    let damages;
    let damageForm;
    let media;

    let arry = []

    console.log(arry.sort((a, b) => a.date - b.date))

    const [addDamageForm, setAddDamageForm] = useState(true);
    const [mediaState, setMediaState] = useState(false)

    if(mediaState.state){
        media = <VanMedia closeMedia={() => setMediaState({state: false, info: null})} van={mediaState.info}/>
    } else {
        media = null;
    }

    if(props.van.damages){
        if(props.van.damages.damagesStatus){
            Object.keys(props.van.damages).map((damages) => {
                let damage = props.van.damages[damages]
                arry.push(damage)
            })
            arry.sort((a, b) => b.date - a.date)
            damages = Object.keys(arry).map((damages) => {
                let damage = arry[damages];
                if(damage !== true){
                    return <div>
                        <h1>{moment(damage.date).format("MMM Do YYYY")}</h1>
                        <h3>{damage.description}</h3>
                        <p>{damage.type}</p>
                        <h3 onClick={() => setMediaState({state: true, info: damage})}>Show Media</h3>
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
            {media}
            <button className="addDamageButton" onClick={() => setAddDamageForm({state: true, info: null})}>Add Damage</button>
            <h1>Damages</h1>
            {damages}
        </div>
    )
}

export default VanDamage;