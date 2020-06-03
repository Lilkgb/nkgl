import React, {useState} from 'react';
import * as firebase from 'firebase';
import {v4} from 'uuid';


function AddDocument(props){
    console.log(props)

    const allInputs = {imgUrl: ''}
    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState(allInputs);
    const [description, setDescription] = useState('');
    console.log(imageAsFile)
    console.log(imageAsUrl)

    const handleImageAsFile = (e) => {
        const image = e.target.files[0]
        setImageAsFile(imageFile => (image))
    }

    const handleFireBaseUpload = e => {
        e.preventDefault()
        let mediaId = v4();
        let storage = firebase.storage().ref(`${props.van.vanId}/${v4()}`)
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
                firebase.database().ref(`vanList/${props.van.vanId}/docs/${mediaId}`).set({media: fireBaseUrl, type: imageAsFile.type, date: Date.now(), description: description})
                if(props.van.docs.docStatus === false){
                    firebase.database().ref(`vanList/${props.van.vanId}/docs`).update({docStatus: true})
                }
                props.closeForm();
            })
        })
      }

    return(
        <div className="addDamageContainer">
            <div className="addDamageInsideContainer">
            <button className="cancel" onClick={() => props.closeForm()} style={{"marginBottom": "15px"}}>Cancel</button>
            <form onSubmit={handleFireBaseUpload}>
                <div>
                    <textarea 
                        rows="5"
                        cols="50"
                        type="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder = "Description"
                    />
                </div>
                <input 
                type="file"
                onChange={handleImageAsFile}
                />
                <button>Upload</button>
            </form>
            </div>
        </div>
    )
}

export default AddDocument;