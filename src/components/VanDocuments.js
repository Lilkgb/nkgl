import React from 'react';
import moment from 'moment';

function VanDocuments(props){

    let documents;

    if(props.van.docs){
        if(props.van.docs.docStatus){
            documents = Object.keys(props.van.docs).map((documents) => {
                let document = props.van.docs[documents];
                if(document !== true){
                    return <div key={documents}>
                        <h1>{document.pdf}</h1>
                    </div>
                }
            })
        } else {
            documents = <h1>No Documents have been uploaded yet.</h1>
        }
    } else {
        documents = <h1>Loading . . .</h1>
    }

    return(
        <div>
            <h1>Documents</h1>
            {documents}
        </div>
    )
}

export default VanDocuments;