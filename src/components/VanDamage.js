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
            <video width="100%" height="500" controls >
            <source src="https://firebasestorage.googleapis.com/v0/b/nkgl-14ae0.appspot.com/o/7217dc93-8577-4199-8509-62e2c2ca9fdc%2Ftrim.658C2F71-4F62-4AFC-A9AC-3123BA4906B7.MOV?alt=media&token=dfd136e8-9a94-41c8-8034-9772e9cf4910" type="video/mp4"/>
            </video>
            {damages}
        </div>
    )
}

export default VanDamage;