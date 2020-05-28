import React, {useState} from 'react';
import * as firebase from 'firebase';
import {v4} from 'uuid';

function AddVanMedia(props){

    console.log(props)
    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const allInputs = {imgUrl: ''}
    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState(allInputs)
    console.log(imageAsFile.type)
    console.log(imageAsUrl)

    const handleImageAsFile = (e) => {
        const image = e.target.files[0]
        setImageAsFile(imageFile => (image))
    }

    const handleFireBaseUpload = e => {
        e.preventDefault()
        let mediaId = v4();
        let storage = firebase.storage().ref(`${props.van.vanId}/${imageAsFile.name}`)
        console.log('start of upload')
        if(imageAsFile === '') {
            console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
        }
        const uploadTask = storage.put(imageAsFile)
        uploadTask.on('state_changed', 
        (snapShot) => {
            console.log(snapShot)
        }, (err) => {
            console.log(err)
        }, () => {
            storage.getDownloadURL()
            .then(fireBaseUrl => {
                setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
                firebase.database().ref(`vanList/${props.van.vanId}/damages/${mediaId}`).set({media: fireBaseUrl, type: imageAsFile.type, date: Date.now(), description: description});
                if(props.van.damages.damagesStatus === false){
                    firebase.database().ref(`vanList/${props.van.vanId}/damages`).update({damagesStatus: true})
                } 
                props.closeAddDamage();
            })
        })
      }

    return(
        <div className="addDamageContainer">
            <div className="addDamageInsideContainer">
            <h1>Add Damage for <span style={{"text-decoration": "underline"}}>{props.van.name}</span></h1>
            <br />
            <label>Description: </label>
            <textarea 
                rows="5"
                cols="50"
                type="text"
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder = "Description"
            />
            <form onSubmit={handleFireBaseUpload}>
                <input 
                type="file"
                onChange={handleImageAsFile}
                />
                <button>Upload</button>
            </form>
            <button className="cancel" onClick={() => props.closeAddDamage()}>Cancel</button>
            </div>
        </div>
    )
}

export default AddVanMedia;