import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

function VanInfo(props){

    let display;
    let van;

    console.log(props)
    console.log(van)

    for(let i=0; i < props.allVans.length; i++){
        if(props.allVans[i].vanId === props.match.params.id){
            van = props.allVans[i]
        }
    }
    
    function goBack(){
        props.history.goBack();
    }

    if(van){
        display = <div>
            <h1>{van.name}</h1>
            <p>{van.vin}</p>
        </div>
    } else {
        display = <h1>Loading . . .</h1>
    }

    return(
        <div>
            <button onClick={goBack}>Go Back</button>
            {display}
        </div>
    )
}

const mapStateToProps = state => ({
    allVans: state.vanState
  })

export default connect(mapStateToProps)(VanInfo);