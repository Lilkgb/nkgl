import React, {useState} from 'react';

function VanMedia(props){

    console.log(props)

    let media;

    if(props.van.type.includes("video")){
        media = <video width="100%" height="500" controls >
        <source src={props.van.media} type="video/mp4"/>
        </video>
    } else{
        media = <img src={props.van.media}/>
    }

    return(
        <div className="mediaContainer">
            <div className="mediaInnerContainer">
                <button onClick={() => props.closeMedia()}>Close</button>
                <h1>damage</h1>
                {media}
            </div>
        </div>
    )
}

export default VanMedia;