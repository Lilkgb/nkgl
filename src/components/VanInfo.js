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
        props.history.push(`/vanlist`);
    }

    function nextVan(){
        for(let i=0; i < props.allVans.length; i++){
            if(props.allVans[i].vanId === props.match.params.id){
                if(props.allVans[i + 1] === undefined || props.allVans[i + 1] === null){
                    props.history.push(`/van/${props.allVans[0].vanId}`)
                } else {
                    props.history.push(`/van/${props.allVans[i + 1].vanId}`)
                }
            }
        }
    }

    function prevVan(){
        for(let i=0; i < props.allVans.length; i++){
            if(props.allVans[i].vanId === props.match.params.id){
                if(props.allVans[i - 1] === undefined || props.allVans[i - 1] === null){
                    let num = props.allVans.length -1;
                    props.history.push(`/van/${props.allVans[num].vanId}`)
                } else {
                    props.history.push(`/van/${props.allVans[i - 1].vanId}`)
                }
            }
        }
    }

    if(van){
        display = <div>
            <button onClick={nextVan}> Next </button>
            <button onClick={prevVan}> Back </button>
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